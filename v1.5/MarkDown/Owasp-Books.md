The OWASP Books project aims to publish OWASP documents in an online bookstore, so that users can freely download digital copies of OWASP books. Physical copies of the books will be sold at the cost of production and delivery.


We wished to revitalise this project, and tested our process on the SAMM project, which has not been maintained, and some of the books are out of date. We put the SAMM project into a markdown syntax, then converted it into ebook and physical book format – a process which developers and Appsec engineers are familiar with.


By making books available in this way, other projects can benefit from them.


We are looking to move off of Lulu into Amazon Books, in order to achieve higher visibility and reach a wider audience. The ebooks will still be free, and the physical books will be at cost, so readers will only pay for shipping and handling.


Using markdown, the content can be rescued for websites, and can be reused in several ways. Markdown can be easily manipulated using pandoc to create e-books or change various parts of the document format


Step 1) - Get pandoc
Brew Install pandoc

Step 2) - convert MD file into epub
pandoc SAMM-1.5.md -o SAMM-1.5.epub --metadata title=“Software Assurance Maturity Model: A guide to building security into software development”

Step 3) - Convert epub into .mobi
Use Kindle previwer (GUI tool)
