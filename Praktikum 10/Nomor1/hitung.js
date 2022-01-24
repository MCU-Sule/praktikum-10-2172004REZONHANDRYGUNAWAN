function HitungJumlah() {
    let x=parseInt(document.getElementById("jumlah1").value);
    let y=parseInt(document.getElementById("jumlah2").value);
    let z=parseInt(document.getElementById("jumlah3").value);

    if (x+y==z) {
	document.getElementById("penjumlahan").innerHTML="Jawaban Benar";
    } else {
	document.getElementById("penjumlahan").innerHTML="Jawaban Salah";
    }
}
function RandomJumlah() {
    document.getElementById("jumlah1").value=Math.floor((Math.random() * 999) + 100);
    document.getElementById("jumlah2").value=Math.floor((Math.random() * 999) + 100);
}



function HitungKurang() {
    let x=parseInt(document.getElementById("kurang1").value);
    let y=parseInt(document.getElementById("kurang2").value);
    let z=parseInt(document.getElementById("kurang3").value);

    if (x-y==z) {
	document.getElementById("pengurangan").innerHTML="Jawaban Benar";
    } else {
	document.getElementById("pengurangan").innerHTML="Jawaban Salah";
    }
}
function RandomKurang() {
    document.getElementById("kurang1").value=Math.floor((Math.random() * 999) + 100);
    document.getElementById("kurang2").value=Math.floor((Math.random() * 999) + 100);
}



function HitungKali() {
    let x=parseInt(document.getElementById("kali1").value);
    let y=parseInt(document.getElementById("kali2").value);
    let z=parseInt(document.getElementById("kali3").value);

    if (x*y==z) {
	document.getElementById("perkalian").innerHTML="Jawaban Benar";
    } else {
	document.getElementById("perkalian").innerHTML="Jawaban Salah";
    }
}
function RandomKali() {
    document.getElementById("kali1").value=Math.floor((Math.random() * 100) + 0);
    document.getElementById("kali2").value=Math.floor((Math.random() * 100) + 0);
}



function HitungBilangan() {
    let x=document.getElementById("bil1").value;
    let bilangan1=x.charAt(0);
    let bilangan2=x.charAt(1);
    let bilangan3=x.charAt(2);

    if (document.getElementById("bil2").value==bilangan1) {
	if (document.getElementById("bil3").value==bilangan2) {
	    if (document.getElementById("bil4").value==bilangan3) {
		document.getElementById("bilangan").innerHTML="Jawaban Benar";
            }
        }
    } else {
	document.getElementById("bilangan").innerHTML="Jawaban Salah";
    }
}
function RandomBilangan() {
    document.getElementById("bil1").value=Math.floor((Math.random() * 999) + 100);
}