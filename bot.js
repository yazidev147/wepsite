function copy2(txt){
    const textArea = document.createElement('textarea');
    textArea.value = txt;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert("تم نسخ البريد الإلكتروني بنجاح");
}
