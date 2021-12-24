$(function(){
	$(document).on("submit","#call_back-form",function(e){
		e.preventDefault();
		var m_method=$(this).attr('method');
		var m_action=$(this).attr('action');
		var m_data=$(this).serialize();
		$.ajax({
			type: m_method,
			url: m_action,
			data: m_data,
			resetForm: 'true',
			success: function(result){
				var data = $(result).find("#call_back-form-wrap").html();
				$("#call_back-form-wrap").html(data);
			}
		});
	});
});
