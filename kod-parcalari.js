// Bu kodları sayfamızın head tagleri arasına ekliyoruz
// 430 değeri yerine ne kadar aşağı inmesini istiyorsanız o kadar yazın,,
// 1000 değeri de hız, ne kadar yavaş inmesi isteniyorsa o kadar arttırın göz kararı.
	<script>
        $(window).load(function(){
            $('html, body').animate({
                scrollTop: '430px'
            },1000);
        });
    </script>
//------------------------------------------------------------------------------------------
//jQuery ile Bir Formu Temizleme
$(':input','#formid')  
    .not(':hidden') // Burada temizlenmesini istemediğiniz alanları belirtiyorsunuz. Ben hidden yaptım  
    .val('') // Burada alanlarınızın value=&quot;&quot; kısmını boşaltıyoruz. İsterseniz değiştirebilirsiniz.  
    .removeAttr('checked') // Checkbox'ları temizliyoruz  
    .removeAttr('selected'); // select ile seçtiğimiz option'ı sıfırladık
//----------------------------------------------------------------------------------------------

//belirli bir sürede sayfayı yenileme 
setTimeout(location.reload(),500);                            
setTimeout (location.href="http://localhost:8084/keybusinessweb/bankavirmanfisi", 2000);  

//------------------------------------------------------------------------------------

//Datatable filter kısmına focuslanarak acılma
$("#mytableid_filter input").focus();
//----------------------------------------------------------------------------------------
//submit kesme işlemi
$("#stokbarkod_form").submit(function (e){
    var durum = $("#stokBarkod").val();
    if (durum === "") {
        e.preventDefault();
        e.stopPropagation();
        alert("* Barkod belirtmeden kaydı tamamlayamazsınız.\n--UYARI--\n* Barkodların birimlerine dikkat ediniz.");
        $("#stokbarkodtemizle").click();
    }
});
//--------------------------------------------------------------------------------------------------
//enter a basıldııgnda
 $('#txtSearchProdAssign').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    $('input[name = butAssignProd]').click();
    return false;  
  }
});
//-----------------------------------------------------------------------
//virgülden sonraki basamak
 $('.tutar').on('change', function () {
        var val = $('.tutar').val();
        //$('#the_number').text( val !== '' ? val : '(empty)' );
    });

    $('.gMiktari').number(true, 2);
//-----------------------------------------------------------------------

//--Ajax veri basarılı olup olmaması
if(data.success == true ){   <-- Change to true (remove quotes)
    alert('true');
} 

//--Deger boş mu degil mi kontrol
var form_intitule = $('input[name=form_intitule]').val().trim();
if (form_intitule.length == 0) {
  alert('fill the blank');
  return false;
}




// modal div in dönerek gelmesi
.rotate {
    transform:rotate(180deg);
    transition:all 0.5s;
}
.rotate.in {
    transform:rotate(1800deg);
    transition:all 1.5s;
}


//-----site yüklenme hızı----
var bss=new Date().getTime();			
    $.post("deneme.html",{},function(){
        var bts=new Date().getTime(),
        sure=((bts-bss)/1000);

        alert("Başlangıç : "+bss+"\nBitiş : "+bts+"\n"+"Hız : "+sure);

});


//----------------------tab panel transition işlemleri----------------------------
$('#myTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});
<ul class="nav nav-tabs" id="myTab">
    <li class="active"><a href="#activity" data-toggle="tab">Activity</a></li>
    <li><a href="#timeline" data-toggle="tab">Timeline</a></li>
    <li><a href="#settings" data-toggle="tab">Settings</a></li>
</ul>
<div class="active tab-pane" id="activity">
</div>
//----------------------------------------------------------------------------------


//------JAVA TARİH AYARLAMALARI-------------------
Date simdikiZaman = new Date();
System.out.println(simdikiZaman.toString());
DateFormat df = new SimpleDateFormat("yyyy/MM/dd"); 
System.out.println(df.format(simdikiZaman));
//----JSP Date İşlemleri-----------------------------
Today's date: <%= (new java.util.Date()).toLocaleString()%>
//------HTML5 DATETIME--------------------------------------------
<input id="datetime" type="datetime-local">  -->11.05.2018 13:44



//less path netbeans
C:\Users\BURAK\AppData\Roaming\npm\node_modules\less\bin\lessc.cmd


//Session web.xml İşlemleri
<session-management>
   <concurrency-control max-sessions="1" error-if-maximum-exceeded="true" />
</session-management>

//--Projenin oldugu dizini veriri---
System.out.println(System.getProperty("user.dir"));


//-------HTML PRINT SETTINGS------------------
html{
    background-color: #FFFFFF; 
    argin: 0px;  /* this affects the margin on the html before sending to printer */
}
body{
    font-size: 15px;
    margin: 10mm 10mm 10mm 10mm; /* margin you want for the content */   
}
	
	
	