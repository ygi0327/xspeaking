function passkey()//최종확인 팝업
{
    if(document.getElementById("mainid").value.length>0)
    {
    if(document.getElementById("firstp").value == document.getElementById("secondp").value)
    alert('가입되었습니다.');
    else{
        alert('비밀번호를 확인해주세요.');
        document.getElementById("firstp").value='';
        document.getElementById("secondp").value='';
    }
}else
{
    alert('아이디를 입력해주세요.');
    document.getElementById("firstp").value='';
    document.getElementById("secondp").value='';
}
    
}

function checklength()//비밀번호 길이확인 8~
{
    var getp=document.getElementById("warning");
    if(document.getElementById("firstp").value.length<8)
    {
        getp.textContent = "비밀번호가 너무 짧습니다.";
        getp.style.color = "#ff0000";
    }else
    {
        getp.textContent = "사용가능합니다.";
        getp.style.color = "#00ff00";
    }
}

function checkpass()//비밀번호 매치 확인
{   
    var getid=document.getElementById("cheakp");
    if(document.getElementById("firstp").value==document.getElementById("secondp").value&&document.getElementById("firstp").value.length>7)
    {
        getid.textContent = "확인되었습니다.";
        getid.style.color = "#00ff00";
    }else
    {
        getid.textContent = "비밀번호를 확인해주세요.";
        getid.style.color = "#ff0000";
    }
    
}