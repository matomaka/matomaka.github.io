



//$(document).ready(function () {
$(window).load(function () {
  startProti();
});



function startProti() {
	
	
	$('#proti_anm_x').fadeIn(700, function () {
		
		$('#proti_anm_2').delay(500).queue(function(n) {
			$('#proti_anm_2').animate(
				{ left: '0px' }, 
				{
					duration: 2000, 
					queue: false, 
					easing: 'easeOutExpo',
					complete: function() {
						
					}
				});
			
			
			$('#proti_anm_1').delay(2200).fadeIn(800);
			
			
			$('#proti_anm_7').delay(600).fadeIn(600);
			$('#proti_anm_6').delay(750).fadeIn(600);
			$('#proti_anm_5').delay(900).fadeIn(600);
			$('#proti_anm_4').delay(1050).fadeIn(600);
			$('#proti_anm_3').delay(1200).fadeIn(600);
			
			
			$('#proti_anm_8').delay(1100).fadeIn(1000);
			
			$('#proti_anm_9').delay(2200).queue(function(n) {
				$('#proti_anm_9').animate(
					{ height: '36px' }, 
					{
						duration: 800, 
						queue: false, 
						easing: 'easeOutExpo',
						complete: function() {
							
						}
					});
				});
			
			
			$('#proti_anm_10').delay(2600).fadeIn(500);
			
			$('#proti_anm_11').delay(1800).fadeIn(500);
			$('#proti_anm_12').delay(1800).fadeIn(500);
		});
			
			
		
		
		
		
	});		
	
	
	$('#aktualnosci_3_1').ready(function() {
		aktualnosciZmien_3($('#ilosc_aktualnosci').val());
	});
	
	
	
	
	$('.menu').mouseover(function() {
		$(this).children().css('background-color','#911640');
	});
	$('.menu').mouseout(function() {
		$(this).children().css('background-color','transparent');
	});
	
	
	$('.protiChange').mouseover(function() {
		var xx = $(this).parent().parent().css('width');
		$(this).css('margin','0 0 0 -' + xx);
	});
	$('.protiChange').mouseout(function() {
		$(this).css('margin','0 0 0 0');
	});
	
	
	
	
	$('.xx_d').mouseover(function() {
		if ($(this).attr('idd') == '1') {
			$(this).css('background-color','#dcdcdc');
		}
	});
	$('.xx_d').mouseout(function() {
		if ($(this).attr('idd') == '1') {
			$(this).css('background-color','transparent');
		}
	});
	$('.xx_d').click(function() {
		
		var hheight = $(this).parent().find('.xx_dd').children().height();
		
		if ($(this).parent().find('.xx_dd').height()) {
			$(this).attr('idd','1');
			$(this).find('#xx_srt').find('img').attr('src','grafika/arrow1.png');
			
			$(this).parent().find('.xx_dd').animate(
				{ height: '0px' }, 
				{
					duration: 800, 
					queue: false, 
					easing: 'easeOutExpo',
					complete: function() {
						
					}
				}
			);
		}
		else {
			$(this).attr('idd','1');
			$(this).find('#xx_srt').find('img').attr('src','grafika/arrow2.png');
			
			$(this).css('background-color','#dcdcdc');
			$(this).attr('idd','0');
			
			$(this).parent().find('.xx_dd').animate(
				{ height: hheight + 'px' }, 
				{
					duration: 800, 
					queue: false, 
					easing: 'easeOutExpo',
					complete: function() {
						
					}
				}
			);
		}
		
		
		
		
	});
	
	
	
	
	$('#kk_z').click(function() {
		if ($('#kk_x').css('display') == 'none') {
			$('#kk_x').stop().fadeIn(400);
		}
		else {
			$('#kk_x').stop().fadeOut(400);
		}
	});
	
	
	
	$('body').on('click', '#kk_y', function() {
		$('#kk_x').stop().fadeOut(400);
	});
	
	
	
	
	
	
}














var aktualnosciOld_3;
var aktualnosciNew_3;


var flag1_3 = 0;
var flag2_3 = 0;
var flaga_3xxx = 0;
var flaga_aktualnosci_3 = 0;
var idInter_3;

function aktualnosciZmien_3(aktualnosciLimit_3) {
	
	if (flaga_3xxx == 0) {
		aktualnosciOld_3 = 1;
		aktualnosciNew_3 = 2;
		flaga_3xxx = 1;
		
		idInter_3 = setInterval('flag2_3=1;aktualnosciZmienStart_3(' + aktualnosciLimit_3 + ');',7000);
	}
}
function aktualnosciZmienStartChange_3(aktualnosciLimit_3,id_) {
	if (id_ != aktualnosciOld_3 && !flaga_aktualnosci_3) {
		flag1_3 = 1;
		flag1_4 = 1;
		aktualnosciNew_3 = id_;
		aktualnosciNew_4 = id_;
		aktualnosciZmienStart_3(aktualnosciLimit_3);
		//aktualnosciZmienStart_4(aktualnosciLimit_3);
	}
}

function aktualnosciZmienStart_3(aktualnosciLimit_3) {
	
	if (flaga_aktualnosci_3 == 0) {
		flaga_aktualnosci_3 = 1;
		if (flag1_3 != flag2_3) {
			
			$('div.aktualnosci_3_' + aktualnosciNew_3).css('display','none');
			$('div.aktualnosci_3_' + aktualnosciNew_3).css('right','0px');
			$('#aktualnosci_31_' + aktualnosciOld_3).attr('class','imgageProti_52');
			$('#aktualnosci_31_' + aktualnosciNew_3).attr('class','imgageProti_5');
			
			
			$('div.aktualnosci_3_' + aktualnosciOld_3).fadeOut(1200, function () {
				
			});
			$('div.aktualnosci_3_' + aktualnosciNew_3).fadeIn(1200, function () {
				if (aktualnosciNew_3 == aktualnosciLimit_3) {
					aktualnosciOld_3 = aktualnosciLimit_3;
					aktualnosciNew_3 = 1;
				}
				else {
					aktualnosciOld_3 = aktualnosciNew_3;
					aktualnosciNew_3++;
				}
				flag1_3 = 0;
				flag2_3 = 0;
				flaga_aktualnosci_3 = 0;
			});
		}
	}
}









































