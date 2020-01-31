#!/bin/bash

cp /static/static.content/ns.order .
cp /static/static.content/toc.xslt .

cp /output/markdown/*.md .

cat ns.order | while read f; do cat ${f/.ns/.md} >> all.md; done

pandoc -o all.html all.md --to=html -s -V css=/static/static.content/css/pdfbook.css

wkhtmltopdf --dump-outline toc.xml all.html all.pdf
sed -i 's/^<xsl:stylesheet version="2.0"/<xsl:stylesheet version="1.0"/' toc.xslt
xsltproc -o toc.html toc.xslt toc.xml
wkhtmltopdf toc.html toc.pdf
export tocPages=$(pdfinfo toc.pdf | egrep '^Pages' | awk {'print $2'})
cat toc.html | sed -re 's#<span>([[:digit:]]{1,})</span>#echo "$(( \1 + $tocPages ))"#e' > toc.html.fixedup
mv toc.html toc.html.orig
cp toc.html.fixedup toc.html
wkhtmltopdf --title "SAMM2 Core Model" --footer-font-size 8 --footer-left "OWASP Software Assurance Maturity Model v2 Core" --footer-right '[page]' toc.html all.html samm2.pdf

