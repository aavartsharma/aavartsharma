let button1 = document.getElementById('ep-47button');
//button1.addEventListener('onclick',hide('para47'));
//confirm("jjjss");
function hide(id,bid,aa,sec)
{
    let para=document.getElementById(id);
    let buttons = document.getElementById(bid);
    let author = document.getElementById(aa);
    let sect = document.getElementById(sec);
    if (para.style.display != 'block')
    {
        para.style.display='block';
        author.innerHTML = 'Hide';
        sect.style.display = 'block';
    }
    else
    {
        para.style.display='none';
        author.innerHTML = `Read more`;
        sect.style.display = 'flex';
    }
}
    
