# Problems Faced

- At first, I got an **EADDRINUSE** error because port **3000** was already being used. I changed the server to run on **port 3001**, and it worked.

- My first version of the HTML pages had too many classes and sections. It looked more advanced than required, so I simplified the pages using basic HTML tags.

- The CSS was not loading at first because I forgot to set the **Content-Type** to `text/css` in the server. After adding the correct route and header, the stylesheet loaded properly.