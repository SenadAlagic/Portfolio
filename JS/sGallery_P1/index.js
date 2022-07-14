function ImageSelect()
{
    let input = document.createElement('input');
    input.type = 'file';
    input.multiple="multiple";
    input.onchange = _this => 
    {
        let files = Array.from(input.files);
        files.forEach(element => 
        {
            // Read the file into memory.
            //var fs = require('fs');
            var imageFile = fs.readFileSync(element);

            // Convert the image data to a Buffer and base64 encode it.
            var encoded = Buffer.from(imageFile).toString('base64');
            console.log(encoded);
        });
        console.log(files);
    };
    input.click();
}