$(function () {
    var html = $("#text").html();

        var user = [{

        name: "Чаговская Татьяна Александровна",
        works: "Lorem ipsum dolor sit amet",
        phone: "+380508283500",
        facebook: "www.facebook.com/chagovskayatatiana",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    },
    {
        content1: "IT направление",
        content2: "web design",
        content3: "Software development"
    }];

    var content = tmpl(html, { data: user});
    $('body').append(content);
});
