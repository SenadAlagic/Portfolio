function ImageSelect()
{
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _this => 
    {
        let files = Array.from(input.files);
        console.log(files);
    };
    input.click();
}