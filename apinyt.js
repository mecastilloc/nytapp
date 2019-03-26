var number;
var startYear;
var endYear;
var query;


$(".search").click(function(){
    event.preventDefault();
    $(".searchResults").empty();
    query=$("#searchTerm").val();
    number=$("#numRecords").val();
    startYear=$("#startYear").val();
    endYear=$("#endYear").val();
    
    key= "M4AgJupqoei1hS2ev6liFB66QLlsoxb0"
    queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date="+startYear+"0101&end_date="+endYear+"1231&q="+query+"&sort=relevance&api-key="+key
    
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(queryUrl);
        console.log(response.response.docs[0].lead_paragraph);
        console.log(response.response.docs[0].web_url);
    
        for(var i=0; i<number; i++){
            var noticediv=$("<div>");
            var t =$("<h5>");
            var p = $("<p>");
            var a = $("<a>");
            var hr = $("<hr>");
            var searchUrl = response.response.docs[i].web_url;
            t.text(response.response.docs[i].headline.main);
            a.attr("href", response.response.docs[i].web_url);
            a.text(searchUrl);
            p.text(response.response.docs[i].lead_paragraph);
            noticediv.append(t);
            noticediv.append(p);
            noticediv.append(a);
            noticediv.append(hr);
            $(".searchResults").prepend(noticediv);
        }
    });
});

$(".clearResults").click(function(){
    event.preventDefault();

    $(".searchResults").empty();
});