# Server simulates signing of a uploaded pdf file, then returns a preview of the signed file

## Setup

- Create a .env file in the root of the server folder
- Copy the contents of the `.env.example` into the `.env` file
- In the terminal, navigate to the 'server' and run `npm install`
- After the node_modules folder has been completed, run `npm run dev`
- If it the console says `Listening on port : 3000`, everything is ok
- Go to your web browser and enter http://localhost:3000/api/ and you should

## How to sign a file

- Go to your web browser and enter http://localhost:3000/api/ and you should
- The Submit button is diabled until a PDF is selected.
- To select a PDF file, select the **Choose file** button
- The of the filename would be displayed next to the **Choose file** button
- When the submit button is pressed, the pdf file is sent to the server to be signed
- The response should be http://localhost:3000/api/upload_pdf
- That returns the preview of the PDF file and a download link to the PDF file.
- After 10 minutes the files are deleted `"File deleted successfully:"`

## How to run Jest tests

- In the terminal, navigate to the 'server' and run `npm run test`

## Todos

- [x] Allow the user to upload a PDF from their mobile device.
- [x] Select from File system
- [x] Only one file
- [x] File size limit (5MB)
- [x] Disable the submit button until a PDF file is selected
- [x] PDF files with errors are automatically deleted
- [ ] Add a check to see if the port number is already in use.
- [ ] Drag and Drop
- [ ] Upload Progress Bar
- [ ] Accessibilty
- [ ] Detect in browser if PDF is locked or encrypted
- [ ] Detect if PDF is corrupted
- [ ] Remove the [Canonical CSS Framework](https://vanillaframework.io) and just use a simple CSS Grid
- [ ] Add a graceful shutdown & startup, for cleaning up the PDF files folders (`uploads, signed_pdf_file`) on the server,
- [ ] e.g `process.on('SIGTERM'`, `process.on('SIGTERM'`
- [ ] Add more WCAG 2.1 Level AA testing
- [ ] Either add more to the Client side or leave everything on the server.
- [ ] Probably replace ejs with handlebars (as hb is easier to use),
- [ ] Add an error handler for very large PDF files (over 5MB).
- [ ] Add more configuration to customize where the signing happens and on which page, within the `.env` e.g `SIGNATURE_PAGE_INDEX`
- [ ] Change the styling for the height on the object element in download.ejs to be more dynamic/closer to `height="auto"` instead of `height="500px"`, which was just a temporary fix, to readily show the pdf controls.

### Testing (todo)

- Add an end-to-end test
- Test a locked PDF file
- Test a corrupted PDF file
- Verify a signature in a PDF file
- Test if the signature was added to the PDF file
