<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/2000/svg" exclude-result-prefixes="#default">

<xsl:param name="cssfilename">SAMM-1.0-roadmap-0.4.css</xsl:param>
<xsl:param name="maturitymodeldefinitionfilename">SAMM-1.0-XML-0.3-en_US.xml</xsl:param>

<xsl:param name="cssoutputstrategy">reference</xsl:param>  <!-- options: reference (default) or inline (requires an XML 2.0 processor; commented out) -->
<xsl:param name="wordWrapStrategy">stringLength</xsl:param> <!-- options: lastSpace (default) or stringLength -->
<xsl:param name="maxTitleLength">13</xsl:param> <!-- maximum number of characters per line in the title -->

<xsl:output 
	method="xml"
	doctype-public="-//W3C//DTD SVG 1.0//EN"
	doctype-system="http://www.w3.org/TR/SVG/DTD/svg10.dtd"
	indent="yes"
	cdata-section-elements="style"/>

<xsl:variable name="roadmapdata" select="/" />
<xsl:variable name="maturitymodeldefinition" select="document($maturitymodeldefinitionfilename)"/>

<xsl:template match="maturity">

	<xsl:if test="$cssoutputstrategy='reference'">
    	<xsl:processing-instruction name="xml-stylesheet">
       		<xsl:text>type="text/css" </xsl:text>
        	<xsl:text>href="</xsl:text>
        	<xsl:value-of select="$cssfilename"/>
        	<xsl:text>"</xsl:text>
    	</xsl:processing-instruction>
    </xsl:if>
    	
	<xsl:variable name="template" select="'SAMM-1.0-roadmap-0.6-en_US.xsl'"/>

	<xsl:variable name="title" select="title"/>
	<xsl:variable name="scaling" select="scaling"/>
	<xsl:variable name="practicesno" select="count(/maturity/states/state[@number=0]/levels/level)"/>
	<xsl:variable name="statesNo" select="count(/maturity/states/state)-1"/>
	<xsl:variable name="mapyoffset" select="25*$statesNo"/>

	<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{140+100*$statesNo}" height="{100*$practicesno+65*$statesNo}">
	<xsl:comment>

		Software Assurance Maturity Model (SAMM) v1.0

		http://www.opensamm.org/

		http://www.owasp.org/index.php/Category:Software_Assurance_Maturity_Model


            <xsl:value-of select="$statesNo"/>-stage Roadmap Chart (using <xsl:value-of select="$template"/>)

		"<xsl:value-of select="$title"/>"

		XML/XSD/XSLT and SVG contributed to the OWASP SAMM project by Colin Watson (Watson Hall Ltd) and
		Brenda Larcom (Stach &amp; Liu).  Inspired and helped by ChartSVG at http://www.hardcoded.net/chartsvg/

		This work is licensed under the Creative Commons Attribution-Share Alike 3.0 License. To view
		a copy of this license, visit http://creativecommons.org/licenses/by-sa/3.0/ or send a letter
		to Creative Commons, 171 Second Street, Suite 300, San Francisco, California, 94105, USA.

	</xsl:comment>
	
	<!-- inlining CSS requires XSL 2.0; some XSLT processors cannot compile with this uncommented -->
	<!-- <xsl:if test="$cssoutputstrategy='inline'">
		<xsl:variable name="css" select="unparsed-text($cssfilename)" />
		<style type="text/css">
			<xsl:value-of select="$css" />
		</style>
	</xsl:if> -->

	<defs>
		<line id="levelMarker" class="mmaxis" x1="0" y1="0" x2="10" y2="0" />
		<polygon id="stagearrow" points="19 3, 31 3, 31 6, 33 6, 25 11, 17 6, 19 6, 19 3" class="mmarrow"/>
	</defs>

	<rect x="0" y="0" width="{140+100*$statesNo}" height="{100*$practicesno+65*$statesNo}" class="mmgraph"></rect>

	<text text-anchor="middle" x="{70+50*$statesNo}" y="{100*$practicesno+40*$statesNo}" class="mmtitle"><xsl:value-of select="$title"/></text>

	<xsl:for-each select="/maturity/states/state[@number>0]">
	
		<!-- add state name -->
		<text text-anchor="end" x="70" y="{11 + 25*(position()-1)}" class="mmstate"><xsl:value-of select="title"/></text>
		
		<!-- add broad vertical stripe -->
		<rect class="mmstripe" x="{120 + 100*(position()-1)}" y="{0 + 25*(position()-1)}" width="50" height="{(100*$practicesno + 25*$statesNo) - 25*(position()-1)}" />

		<!-- add narrow horizontal key line -->
		<rect class="mmkey" x="80" y="{0 + 25*(position()-1)}" width="{90 + 100*(position()-1)}" height="12" />

		<!-- add downward arrow markers -->
		<use xlink:href="#stagearrow" x="{120 + 100*(position()-1)}" y="{-1 + 25*(position()-1)}"/>
		
		<!-- add key to foot of chart -->
		<text text-anchor="start" x="{70-120+50*$statesNo}" y="{100*$practicesno+30+40*$statesNo + 15*(position()-1)}" class="mmstate"><xsl:value-of select="title"/></text>
		<text text-anchor="start" x="{70-50+50*$statesNo}" y="{100*$practicesno+30+40*$statesNo + 15*(position()-1)}" class="mmstate"><xsl:value-of select="description"/></text>
		
	</xsl:for-each>	
		
	<!-- if a stage has the "marker" attribute of "true", and it is not stage 0, highlight it on the chart in the 'mmmarker' style (e.g with a broad vertical dashed line) -->
	<xsl:if test="count(/maturity/states/state[@marker='true']) = 1">
		<xsl:variable name="markerState" select="/maturity/states/state[@marker='true']/@number"/>
		<xsl:if test="$markerState > 0">
			<line x1="{195 + 100*(-1+$markerState)}" y1="{-5+(25*$statesNo)}" x2="{195 + 100*(-1+$markerState)}" y2="{5+(25*$statesNo)+100*$practicesno}" class="mmmarker"/>
		</xsl:if>
	</xsl:if>

	<xsl:for-each select="$maturitymodeldefinition/*/security-practices/security-practice">
		<xsl:variable name="practiceId" select="@id" />
		<xsl:variable name="practiceNumber" select="@number" />

		<!-- to allow subset roadmaps, only process this practice if the roadmap data has levels for it -->
		<xsl:if test="$roadmapdata/maturity/states/state[@number=0]/levels/level[@security-practice=$practiceId]">

		<!-- word wrap the security practice label text -->
		<xsl:variable name="label1">
			<xsl:call-template name="wordWrap">
				<xsl:with-param name="original" select="title" />
				<xsl:with-param name="strategy" select="$wordWrapStrategy" />
				<xsl:with-param name="segmentNumber" select="1" />
				<xsl:with-param name="maxLength" select="$maxTitleLength" />					
			</xsl:call-template>
		</xsl:variable>
		<xsl:variable name="label2">
			<xsl:call-template name="wordWrap">
				<xsl:with-param name="original" select="title" />
				<xsl:with-param name="strategy" select="$wordWrapStrategy" />
				<xsl:with-param name="segmentNumber" select="2" />
				<xsl:with-param name="maxLength" select="$maxTitleLength" />					
			</xsl:call-template>
		</xsl:variable>
		
		<!-- add vertical axis label text -->
		<text text-anchor="start" x="10" y="{$mapyoffset+20+100*((@number)-1)}" class="mmpractice"><xsl:value-of select="$label1" /></text>
		<text text-anchor="start" x="10" y="{$mapyoffset+35+100*((@number)-1)}" class="mmpractice"><xsl:value-of select="$label2" /></text>
		
		<!-- add axes and vertical tick marks -->
		<polyline class="mmaxis" points="100,{$mapyoffset+100*((@number)-1)} 100,{$mapyoffset+75+100*((@number)-1)} {140+100*$statesNo},{$mapyoffset+75+100*((@number)-1)} "/>
			<use xlink:href="#levelMarker" x="100" y="{$mapyoffset+0+100*((@number)-1)}" />
			<use xlink:href="#levelMarker" x="100" y="{$mapyoffset+25+100*((@number)-1)}" />
			<use xlink:href="#levelMarker" x="100" y="{$mapyoffset+50+100*((@number)-1)}" />
	
		<!-- gather the points data together so we can draw the polygon -->
		<xsl:variable name="elements">
			<xsl:for-each select="$roadmapdata/maturity/states/state">
				<!-- find the human-readable maturity level -->
				<xsl:variable name="humanReadableLevel">
					<xsl:call-template name="practiceLevel">
						<xsl:with-param name="stateNumber" select="@number" />
						<xsl:with-param name="practiceId" select="$practiceId" />
					</xsl:call-template>
				</xsl:variable>
				
				<!-- look up the level value that goes with the human-readable level name -->
				<xsl:variable name="point">
					<xsl:value-of select="number($maturitymodeldefinition/SAMM/level-data/level-value[@id
= $humanReadableLevel]/@value)"/>
				</xsl:variable> 
				
				<!-- starting level -->
				<xsl:if test="position() = 1">
					<xsl:value-of select="concat(120, ',', 75+$mapyoffset+100*(($practiceNumber)-1), ' ', 120, ',', (75+$mapyoffset+100*(($practiceNumber)-1))-(25*$point))"/>
				</xsl:if>
				<xsl:if test="position() > 1">
					<xsl:value-of select="concat( ' ',  70+(100*(position()-1)), ',', (75+$mapyoffset+100*(($practiceNumber)-1))-(25*$point) )"/>
					<xsl:value-of select="concat( ' ',  120+(100*(position()-1)), ',', (75+$mapyoffset+100*(($practiceNumber)-1))-(25*$point) )"/>
				</xsl:if>
				<!-- close off chart area -->
				<xsl:if test="last() = position()">
					<xsl:value-of select="concat(' ',  120+(100*(position()-1)), ',', 75+$mapyoffset+100*(($practiceNumber)-1))"/>
				</xsl:if>
			</xsl:for-each>
		</xsl:variable>
		
		<!-- add coloured polygon to the security practice -->
		<polygon class="{concat('mm',@business-function)}" points="{$elements}" />
		
		</xsl:if>
		
	</xsl:for-each>

	</svg>

</xsl:template>

<!-- This template looks up the human-readable value of the given practice 
in the given state.  This is needed because the maturity level of a practice
may not change in each state, so it may not be mentioned in each state.
	 Input parameters: 
	 	stateNumber (mandatory): the number of the state to look up
	 	practiceId (mandatory): the id of the practice to look up 
-->
<xsl:template name="practiceLevel">
	<xsl:param name="stateNumber"/>
	<xsl:param name="practiceId"/>

	<xsl:variable name="levels" select="$roadmapdata/maturity/states/state[@number=$stateNumber]/levels" />
	<xsl:choose>
		<xsl:when test="$stateNumber=-1">
			<xsl:value-of select="''" />
		</xsl:when>
		<xsl:when test="$levels/level[@security-practice=$practiceId]">
			<xsl:value-of select="$levels/level[@security-practice=$practiceId]/@value" />		
		</xsl:when>
		<xsl:otherwise>
			<xsl:call-template name="practiceLevel">
				<xsl:with-param name="stateNumber" select="($stateNumber)-1" />
				<xsl:with-param name="practiceId" select="$practiceId" />
			</xsl:call-template>
		</xsl:otherwise>
	</xsl:choose>

</xsl:template>

<xsl:include href="SAMM-1.0-utilities-0.1.xsl" />

</xsl:stylesheet>