

var flaga_inputCien = 0;
function inputCien(id_) {
	if (!flaga_inputCien) {
		flaga_inputCien = 1;
		
		id_2 = id_;
		if (id_ < 0) {
			
			id_2 = id_;
			id_ = id_ * -1;
		}
		
		
		$('div.login_' + id_ + '_1').fadeOut(200, function () {
			if (id_2 < 0)
				document.getElementById('login' + id_).focus();
			flaga_inputCien = 0;
		});
	}
}




function inputCienB(id_) {
	if ($('#login' + id_ + '').val() == '') {
		$('div.login_' + id_ + '_1').fadeIn(200, function () {
				
		});
	}
}







var flaga_inputCien2 = 0;
function inputCien2(id_) {
	if (!flaga_inputCien2) {
		flaga_inputCien2 = 1;
		
		id_2 = id_;
		if (id_ < 0) {
			
			id_2 = id_;
			id_ = id_ * -1;
		}
		
		
		$('div.kontakt_' + id_ + '_1').fadeOut(200, function () {
			if (id_2 < 0)
				document.getElementById('kontakt' + id_).focus();
			flaga_inputCien2 = 0;
		});
	}
}




function inputCienB2(id_) {
	if (!$('#kontakt' + id_ + '').val()) {
		$('div.kontakt_' + id_ + '_1').fadeIn(200, function () {
			
		});
	}
}


function wyslij_o_nas() {
	var rejestruj_flaga = 1;
	
	if (!$('#login1').val()) {
		$('#login1').css('background-color','#f8e5e5');
		rejestruj_flaga = 0;
	}
	else {
		$('#login1').css('background-color','#fff');
	}
	if (!$('#login2').val()) {
		$('#login2').css('background-color','#f8e5e5');
		rejestruj_flaga = 0;
	}
	else {
		$('#login2').css('background-color','#fff');
	}
	if (!$('#login3').val()) {
		$('#login3').css('background-color','#f8e5e5');
		rejestruj_flaga = 0;
	}
	else {
		$('#login3').css('background-color','#fff');
	}
	if (!$('#login4').val()) {
		$('#login4').css('background-color','#f8e5e5');
		rejestruj_flaga = 0;
	}
	else {
		$('#login4').css('background-color','#fff');
	}
	
	
	if (rejestruj_flaga) {
		wyslij_o_nas_S();
	}
	else {
		//alert('Proszę wypełnić wszystkie zaznaczone pola.');
	}
}




var flag_wyslij_o_nas2 = 1;
function wyslij_o_nas_S() {
	if (flag_wyslij_o_nas2 == 1) {
		flag_wyslij_o_nas2 = 0;
		
		$('div.a_button').html('<span class="Ttekst">w trakcie wysyłania...</span>');
		
		
		URL_parameters = 'a1=' + encodeURIComponent($('#login1').val()) + '&a2=' + encodeURIComponent($('#login2').val()) + '&a3=' + encodeURIComponent($('#login3').val()) + '&a4=' + encodeURIComponent($('#login4').val());
		
		
		var strURL = "_ajax.kontakt.zapytanie.php";
		
		
		$.ajax({
			type: "POST",
			url: strURL,
			data: URL_parameters,
			success: function(msg){
				var odpowiedz = msg.charAt(0);
				if (odpowiedz == 1) {
					$('div.zapytanie_01').fadeOut(400, function () {
						$('div.zapytanie_02').fadeIn(400);
					});
				}
				else {
					$('div.zapytanie_01').fadeOut(400, function () {
						$('div.zapytanie_03').fadeIn(400);
					});
				}
			}
		});
	}		
}




