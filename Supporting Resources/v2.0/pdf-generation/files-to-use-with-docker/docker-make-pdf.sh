#!/bin/bash

version=0.5

# create the dir or docker will, probably with the wrong owner.
mkdir -p $(pwd)/pdf/output

docker run --rm -v $(pwd)/Datafiles:/app/Datafiles -v $(pwd)/pdf/static:/static -v $(pwd)/pdf/output:/output nessimk/samm2yaml2pdf:${version} /app/make_pdf.sh /static /output
