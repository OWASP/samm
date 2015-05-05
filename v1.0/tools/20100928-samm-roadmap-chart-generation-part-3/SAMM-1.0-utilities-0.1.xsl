<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/2000/svg" exclude-result-prefixes="#default">

<!-- This template word wraps a string, then returns line N.
	 Input parameters: 
	 	original (mandatory): original string to split
	 	strategy (mandatory): 'lastSpace' or 'stringLength' 
	 	segmentNumber (mandatory): which line to return
	 	maxLength (mandatory if strategy is stringLength): maximum length before a split
-->
<xsl:template name="wordWrap">
	<xsl:param name="original"/>
	<xsl:param name="strategy"/>
	<xsl:param name="segmentNumber"/>
	<xsl:param name="maxLength"/>
	
	<xsl:choose>
		<xsl:when test="$strategy='lastSpace'">
			<xsl:variable name="lastSpace"> 
				<xsl:call-template name="lastCharPosition">
					<xsl:with-param name="original" select="$original" />
					<xsl:with-param name="character" select="' '" />
				</xsl:call-template>
			</xsl:variable>
			<xsl:choose>
				<xsl:when test="$segmentNumber=1">
					<xsl:value-of select="normalize-space(substring($original,1,$lastSpace))" />
				</xsl:when>
				<xsl:when test="$segmentNumber=2">
					<xsl:value-of select="normalize-space(substring($original,$lastSpace+1,string-length($original)))" />
				</xsl:when>
			</xsl:choose>
		</xsl:when>
		<xsl:when test="$strategy='stringLength'">
			<xsl:variable name="markedup"> 
				<xsl:call-template name="string_splitter">
					<xsl:with-param name="original" select="$original" />
					<xsl:with-param name="maxLength" select="$maxLength" />
					<xsl:with-param name="separator">NEWLINEPLACEHOLDER</xsl:with-param>
					<xsl:with-param name="wordWrap" select="'true'" />
				</xsl:call-template>
			</xsl:variable>
			<xsl:call-template name="nthSegment">
				<xsl:with-param name="original" select="$markedup"/>
				<xsl:with-param name="segmentNumber" select="$segmentNumber" />
				<xsl:with-param name="separator">NEWLINEPLACEHOLDER</xsl:with-param>
			</xsl:call-template>
		</xsl:when>
	</xsl:choose>

</xsl:template>

<!-- This template returns segment N of a string.
	 Input parameters: 
	 	original (mandatory): string from which to return the Nth segment
	 	segmentNumber (mandatory): which segment to return
	 	separator (mandatory): separator that marks the beginning of a segment in original
-->
<xsl:template name="nthSegment">
	<xsl:param name="original"/>
	<xsl:param name="segmentNumber"/>
	<xsl:param name="separator"/>
	
	<xsl:choose>
		<xsl:when test="$segmentNumber=1">
			<xsl:choose>
				<xsl:when test="contains($original,$separator)">
					<xsl:value-of select="normalize-space(substring-before($original, $separator))" />
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="$original" />
				</xsl:otherwise>
			</xsl:choose>
		</xsl:when>
		<xsl:otherwise>
			<xsl:choose>
				<xsl:when test="contains($original,$separator)">
					<xsl:call-template name="nthSegment">
						<xsl:with-param name="original" select="substring-after($original, $separator)"/>
						<xsl:with-param name="segmentNumber" select="($segmentNumber)-1" />
						<xsl:with-param name="separator" select="$separator" />
					</xsl:call-template>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="''" />
				</xsl:otherwise>
			</xsl:choose>
		</xsl:otherwise>
	</xsl:choose>

</xsl:template>
		
<!-- This template from Cams Ismael returns a string that is splitted according
	 to a maximal length of characters.
	 Input parameters: 
	 	original (mandatory): original string that must be splitted
	 	maxLength (mandatory): maximum length before a split
	 	separator (mandatory): separator that must be used to split the string
	 	wordWrap (optional): set this value to 'true' if a word must keep together
	 			  			 instead of splitting a word in the middle, there will
	 			  			 be split before the word. Note that when the word is
	 			  			 longer than the maximal length, it's impossible to
	 			  			 keep the word together.
-->
<xsl:template name="string_splitter">
	<xsl:param name="original"/>
	<xsl:param name="maxLength"/>
	<xsl:param name="separator"/>
	<xsl:param name="wordWrap"/>
	<xsl:choose>
		<xsl:when test="string-length($original)>$maxLength">
			<xsl:variable name="length-substring">
				<xsl:choose>
					<xsl:when test="$wordWrap='true'">
						<xsl:call-template name="lastCharPosition">
							<xsl:with-param name="original" select="substring($original,1,$maxLength)"/>
							<xsl:with-param name="character" select="' '"/>
						</xsl:call-template>
					</xsl:when>
					<xsl:otherwise>
						<xsl:value-of select="$maxLength"/>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:variable>
			<xsl:value-of select="concat(substring($original,1,$length-substring),$separator)"/>
			<xsl:call-template name="string_splitter">
				<xsl:with-param name="original" select="substring($original,$length-substring+1,string-length($original))"/>
				<xsl:with-param name="maxLength" select="$maxLength"/>
				<xsl:with-param name="separator" select="$separator"/>
				<xsl:with-param name="wordWrap" select="'true'"/>
			</xsl:call-template>
		</xsl:when>
		<xsl:otherwise>
			<xsl:value-of select="$original"/>
		</xsl:otherwise>
	</xsl:choose>
</xsl:template>

<!-- This template from Cams Ismael returns the position of the last
	 given character in the string that can be found. When
	 the character is not available in the string, the 
	 position of the last character is returned.
	 Input parameters:
		original (mandatory): original string in which the character must be searched
		character(mandatory): character for which the last position must be returned	 	 
-->
<xsl:template name="lastCharPosition">
	<xsl:param name="original"/>
	<xsl:param name="character"/>
	<xsl:param name="string_length"/>
	<xsl:variable name="len">
		<xsl:choose>
			<xsl:when test="$string_length">
				<xsl:value-of select="$string_length"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="'0'"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>
	<xsl:variable name="char_len">
		<xsl:value-of select="string-length($character)"/>
	</xsl:variable>
	<xsl:choose>
		<xsl:when test="contains($original,$character)">
			<xsl:choose>
				<xsl:when test="contains(substring-after($original,$character),$character)">
					<xsl:call-template name="lastCharPosition">
						<xsl:with-param name="original" select="substring-after($original,$character)"/>
						<xsl:with-param name="character" select="$character"/>
						<xsl:with-param name="string_length" select="string-length(concat(substring-before($original,$character),''))+$len"/>
					</xsl:call-template>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="string-length(substring-before($original,$character))+$char_len+$len"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:when>
		<xsl:otherwise>
			<xsl:value-of select="string-length($original)"/>
		</xsl:otherwise>
	</xsl:choose>
</xsl:template>

</xsl:stylesheet>