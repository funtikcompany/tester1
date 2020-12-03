$(function () {

	//E-mail Ajax Send
	$(".form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$("video").prop('muted', true);
	$(".wrapper__volume").click(function () {
		if ($("video").prop('muted')) {
			$("video").prop('muted', false);
		}
		$(".wrapper__volume").addClass("fixed");

	});

});
function checkIp() {
	$.getJSON('https://apileads.3snet.tech/check-ip', function (data) {
		console.log(data);
		if (typeof data.ip != 'undefined') {
			var ip = data.ip;
			$('input[name=ip]').attr('value', ip);
		}
	});
};

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function copies() {
	let el = $(".slots .pin");
	let left = parseInt($(el).html());

	left = left > 5 ? left - rand(1, 3) : left - rand(-2, 2);
	if (left < 2) {
		$(el).html(1);
	} else $(el).html(left);

	setTimeout('copies()', rand(9000, 13000));
}
function visitors() {
	let el = $(".online .pin");
	let left = parseInt($(el).html());
	var start = left - 20;
	let end = left + 20;
	if (start < 100) start = left;
	if (end > 200) end = left;
	$(".online .pin").html(rand(start, end));
	setTimeout('visitors()', rand(3000, 13000));
}
function videoReview() {
	$('.video-review').click(function () {
		$(this).find(".poster").remove();
		$(this).find("video").play();
	});
}

$(function () {
	copies();
	visitors();

});