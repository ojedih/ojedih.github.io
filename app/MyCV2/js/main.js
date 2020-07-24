
$("input").val("").fadeOut(0);
$("textarea").val("").fadeOut(0);
$("button#btnNext").fadeOut(0);
$(".edits").fadeOut(0);
$("ul").fadeOut(0);
$("li").fadeOut(0);
$("h2").fadeOut(0);
$(".cv").fadeOut(0);


//Start
$(".new").on("click", function(){
    $(".btnDemo").fadeOut(700);
    $(this).fadeOut(700, function(){
        $(".name").fadeIn(700).focus();
        $(".btnName").fadeIn(700);
    });
});


//Name
$(".btnName").on("click", function(){
    if($(".name").val()) {
        window.name = $(".name").val();
        $(".name").fadeOut(700);
        $(this).fadeOut(700, function(){
            $(".lname").fadeIn(700).focus();
            $(".btnLname").fadeIn(700);
            $("h2").fadeOut(700);
        });
    } else {    
        $(".msgEmpty").fadeIn(200);
        $("input.name").addClass("empty");
    }
});

//Last Name
$(".btnLname").on("click", function(){
    if($(".lname").val()){
        window.lname = $(".lname").val();
        $(".lname").fadeOut(700);
        $(this).fadeOut(700, function(){
            $(".age").fadeIn(700).focus();
            $(".btnAge").fadeIn(700);
            $("h2").fadeOut(700);
            $(".title").text(name + " " + lname + "´s CV");
            $(".mainH1Title").fadeOut(700, function(){
                $(this).fadeIn(700).text(name + " " + lname + "´s CV");
                $(".h1Title").text(name + " " + lname + "´s CV");
            });
        });
    } else {    
        $(".msgEmpty").fadeIn(200);
        $("input.lname").addClass("empty");
    }
});

//Age
$(".btnAge").on("click", function(){
    if($(".age").val() > 0) {
        if($(".age").val() > 99) {
            $(".msgAge").fadeIn(200);
            $("input.age").addClass("empty");
        } else {
            window.age = $(".age").val();
            $(".age").fadeOut(700);
            $(this).fadeOut(700, function(){
                $("h2").fadeOut(700);
                $(".email").fadeIn(700).focus();
                $(".btnEmail").fadeIn(700);
            });
        }
    } else {
        $(".msgAge").fadeIn(200);
        $("input.age").addClass("empty");
    }
});

//Email
$(".btnEmail").on("click", function(){
    window.email = $(".email").val();
    $(".email").fadeOut(700);
    $(this).fadeOut(700, function(){
        $(".phone").fadeIn(700).focus();
        $(".btnPhone").fadeIn(700);
    });
});

//Phone
$(".btnPhone").on("click", function(){
    window.phone = $(".phone").val();
    $(".phone").fadeOut(700);
    $(this).fadeOut(700, function(){
        $(".city").fadeIn(700).focus();
        $(".btnCity").fadeIn(700);
    });
});

//City
$(".btnCity").on("click", function(){
    window.city = $(".city").val();
    $(".city").fadeOut(700);
    $(this).fadeOut(700, function(){
        $(".country").fadeIn(700).focus();
        $(".btnCountry").fadeIn(700);
    });
});

//Country
$(".btnCountry").on("click", function(){
    window.country = $(".country").val();
    $(".country").fadeOut(700);
    $(this).fadeOut(700, function(){
        $(".zip").fadeIn(700).focus();
        $(".btnZip").fadeIn(700);
    });
});

//Zip
$(".btnZip").on("click", function(){
    window.zip = $(".zip").val();
    $(".zip").fadeOut(700);
    $(this).fadeOut(700, function(){
        $(".bio").fadeIn(700).focus();
        $(".btnBio").fadeIn(700);
    });
});

//Bio
$(".btnBio").on("click", function(){
    window.bio = $(".bio").val();
    $("div.bioTwo").append("<p id='bio' class='bioOne'>" + bio + "</p>");
    $(".bio").fadeOut(700);
    $(this).fadeOut(700, function(){
        $(".skills").fadeIn(700).focus();
        $(".btnSkills").fadeIn(700);
        $(".addSkills").fadeIn(700);
        $(".ulSkills").fadeIn(700);
    });
});

//Skills
    //Add Skill
    $("button.addSkills").on("click", function(){
            if($("input.skills").val()) {
                var skill = $("input.skills").val();
                $("input.skills").val("").focus();
                $(".ulSkills").append("<li class='caps liEdited liSkills'>" + skill + "</li>");
                $(".ulSkills2").append("<li class='caps liSkills2'><span class='li-span'>-</span>" + skill + "</li>");
                $("input.skills").removeClass("empty");
                $(".liSkills").fadeIn(700);
                $("h2").fadeOut(700);
            } else {
                $(".msgEmpty").fadeIn(700);
                $("input.skills").addClass("empty");
            }
    });

    //Next
    $(".btnSkills").on("click", function(){
        if($("input.skills").val()) {
            var skill = $("input.skills").val();
            $("input.skills").val("");
            $(".ulSkills").append("<li class='caps liEdited liSkills'>" + skill + "</li>");
            $(".ulSkills2").append("<li class='caps liSkills2'><span class='li-span'>-</span>" + skill + "</li>");
            $("input.skills").removeClass("empty");
            $(".liSkills").fadeIn(700);
        }
        $("h2").fadeOut(700);
        $(".skills").fadeOut(700);
        $(".addSkills").fadeOut(700);
        $(".ulSkills").fadeOut(700);
        $(".liSkills").fadeOut(700);
        $(this).fadeOut(700, function(){
            $(".lang").fadeIn(700).focus();
            $(".langLevel").fadeIn(700);
            $(".btnLang").fadeIn(700);
            $(".addLang").fadeIn(700);
            $(".ulLang").fadeIn(700);
        });
    });

//Language
    //Add Language
    $("button.addLang").on("click", function(){
        if($("input.lang").val()) {
            var lang = $("input.lang").val();
            var langLevel = $("input.langLevel").val();
            $("input.lang").val("").focus();
            $("input.langLevel").val("");
            $(".ulLang").append("<li class='caps liEdited liLang'>" + lang + "<span class='cursiveSpan'>-" + langLevel + "</span></li>");
            $(".ulLang2").append("<li class='caps liLang2'><span class='li-span'>-</span>" + lang + "<span class='cursiveSpan'>-" + langLevel + "</span></li>");
            $("input.lang").removeClass("empty");
            $(".liLang").fadeIn(700);
            $("h2").fadeOut(700);
        } else {
            $(".msgEmpty").fadeIn(700);
            $("input.lang").addClass("empty");
        }
    });

    //Next
    $(".btnLang").on("click", function(){
        if($("input.lang").val()) {
            var lang = $("input.lang").val();
            var langLevel = $("input.langLevel").val();
            $("input.lang").val("");
            $("input.langLevel").val("");
            $(".ulLang").append("<li class='caps liEdited liLang'>" + lang + "<span class='cursiveSpan'>-" + langLevel + "</span></li>");
            $(".ulLang2").append("<li class='caps liLang2'><span class='li-span'>-</span>" + lang + "<span class='cursiveSpan'>-" + langLevel + "</span></li>");
            $("input.lang").removeClass("empty");
            $(".liLang").fadeIn(700);
        }
        $("h2").fadeOut(700);
        $(".lang").fadeOut(700);
        $(".addLang").fadeOut(700);
        $(".langLevel").fadeOut(700);
        $(".ulLang").fadeOut(700);
        $(".liLang").fadeOut(700);
        $(this).fadeOut(700, function(){
            $(".school").fadeIn(700).focus();
            $(".btnSchool").fadeIn(700);
            $(".addSchool").fadeIn(700);
            $(".ulSchool").fadeIn(700);
        });
    });

//School
    //Add School
    $("button.addSchool").on("click", function(){
        if($("input.school").val()) {
            $(".liSchool").fadeIn(700);
            var school = $("input.school").val();
            $("input.school").val("").focus();
            $(".ulSchool").append("<li class='caps liEdited liSchool'>" + school + "</li>");
            $(".ulSchool2").append("<li class='caps liSchool2'><span class='li-span'>-</span>" + school + "</li>");
            $("input.school").removeClass("empty");
            $("h2").fadeOut(700);
        } else {
            $(".msgEmpty").fadeIn(700);
            $("input.school").addClass("empty");
        }
    });

    //Next
    $(".btnSchool").on("click", function(){
        if($("input.school").val()) {
            $(".liSchool").fadeIn(700);
            var school = $("input.school").val();
            $("input.school").val("");
            $(".ulSchool").append("<li class='caps liEdited liSchool'>" + school + "</li>");
            $(".ulSchool2").append("<li class='caps liSchool2'><span class='li-span'>-</span>" + school + "</li>");
            $("input.school").removeClass("empty");
        }
        $("h2").fadeOut(700);
        $(".school").fadeOut(700);
        $(".addSchool").fadeOut(700);
        $(".ulSchool").fadeOut(700);
        $(".liSchool").fadeOut(700);
        $(this).fadeOut(700, function(){
            $(".work").fadeIn(700).focus();
            $(".btnWork").fadeIn(700);
            $(".addWork").fadeIn(700);
            $(".ulWork").fadeIn(700);
        });
    });

//Work
    //Add Work
    $("button.addWork").on("click", function(){
        if($("input.work").val()) {
            $(".liWork").fadeIn(700);
            var work = $("input.work").val();
            $("input.work").val("").focus();
            $(".ulWork").append("<li class='caps liEdited liWork'>" + work + "</li>");
            $(".ulWork2").append("<li class='caps liWork2'><span class='li-span'>-</span>" + work + "</li>");
            $("input.work").removeClass("empty");
            $("h2").fadeOut(700);
        } else {
            $(".msgEmpty").fadeIn(700);
            $("input.work").addClass("empty");
        }
    });

    //Finish
    $(".btnWork").on("click", function(){
        if($("input.work").val()) {
            $(".liWork").fadeIn(700);
            var work = $("input.work").val();
            $("input.work").val("");
            $(".ulWork").append("<li class='caps liEdited liWork'>" + work + "</li>");
            $(".ulWork2").append("<li class='caps liWork2'><span class='li-span'>-</span>" + work + "</li>");
            $("input.work").removeClass("empty");
        } 
        $(this).fadeOut(700, function(){
            finishCV();
            editing();
            hoverEff();
        });
    });
        

        
    


//Print 
    $(".btnPrint").on("click", function(){
        $(".reload").fadeOut(700);
        $(".endText").fadeOut(700);
        $(this).fadeOut(700, function(){
            print();
        });
    });

//Reload Page
    $(".reload").on("click", function(){
        $("body").fadeOut(700, function(){
            location.reload();
        });
    });

//Demo Button 
    $(".btnDemo").on("click", function(){
        $(".starter").fadeOut(700);
        $(this).fadeOut(700, function(){
            $(".cv").fadeIn(700, function(){
                $("#name").text("Will Smith");
                $("#age").text("5 Years Old");
                $("#email").text("will.smith@gmail.com");
                $("#phone").text("Phone No. +1 (951)264-2383");
                $("#city").text("12345, Los Angeles, USA");
                $("#bioEx").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis sollicitudin mi sed feugiat. Nulla a iaculis dui, quis rutrum lorem. Vestibulum rhoncus tellus velit. Phasellus tincidunt vitae diam ac accumsan. Morbi a ipsum bibendum, ullamcorper leo ut, posuere velit. Morbi quis velit eleifend, tempor urna non, convallis diam. Aenean felis felis, condimentum ut auctor ac, aliquet et odio. Nunc non faucibus libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus euismod sapien vel ligula tincidunt, vel sollicitudin mauris pellentesque.");
                $(".ulSkills2").append("<li class='liSkills2'><span class='li-span'>-</span>Engineer</li>").fadeIn(700);
                $(".ulSkills2").append("<li class='liSkills2'><span class='li-span'>-</span>Engineer</li>").fadeIn(700);
                $(".ulSkills2").append("<li class='liSkills2'><span class='li-span'>-</span>Engineer</li>").fadeIn(700);
                $(".ulSkills2").append("<li class='liSkills2'><span class='li-span'>-</span>Engineer</li>").fadeIn(700);
                $(".ulSkills2").append("<li class='liSkills2'><span class='li-span'>-</span>Engineer</li>").fadeIn(700);
                $(".ulSkills2").append("<li class='liSkills2'><span class='li-span'>-</span>Engineer</li>").fadeIn(700);
                $(".ulSkills2").append("<li class='liSkills2'><span class='li-span'>-</span>Engineer</li>").fadeIn(700);
                $(".ulSkills2").append("<li class='liSkills2'><span class='li-span'>-</span>Engineer</li>").fadeIn(700);
                $(".ulSkills2").append("<li class='liSkills2'><span class='li-span'>-</span>Engineer</li>").fadeIn(700);
                $(".ulSkills2").append("<li class='liSkills2'><span class='li-span'>-</span>Engineer</li>").fadeIn(700);
                $(".ulSkills2").append("<li class='liSkills2'><span class='li-span'>-</span>Engineer</li>").fadeIn(700);
                $(".ulSkills2").append("<li class='liSkills2'><span class='li-span'>-</span>Engineer</li>").fadeIn(700);
                $(".ulSchool2").append("<li class='liSchool2'><span class='li-span'>-</span>School</li>").fadeIn(700);
                $(".ulSchool2").append("<li class='liSchool2'><span class='li-span'>-</span>School</li>").fadeIn(700);
                $(".ulSchool2").append("<li class='liSchool2'><span class='li-span'>-</span>School</li>").fadeIn(700);
                $(".ulSchool2").append("<li class='liSchool2'><span class='li-span'>-</span>School</li>").fadeIn(700);
                $(".ulSchool2").append("<li class='liSchool2'><span class='li-span'>-</span>School</li>").fadeIn(700);
                $(".ulSchool2").append("<li class='liSchool2'><span class='li-span'>-</span>School</li>").fadeIn(700);
                $(".ulWork2").append("<li class='liWork2'><span class='li-span'>-</span>Work</li>").fadeIn(700);
                $(".ulWork2").append("<li class='liWork2'><span class='li-span'>-</span>Work</li>").fadeIn(700);
                $(".ulWork2").append("<li class='liWork2'><span class='li-span'>-</span>Work</li>").fadeIn(700);
                $(".ulWork2").append("<li class='liWork2'><span class='li-span'>-</span>Work</li>").fadeIn(700);
                $(".ulWork2").append("<li class='liWork2'><span class='li-span'>-</span>Work</li>").fadeIn(700);
                $(".ulWork2").append("<li class='liWork2'><span class='li-span'>-</span>Work</li>").fadeIn(700);
                $(".ulWork2").append("<li class='liWork2'><span class='li-span'>-</span>Work</li>").fadeIn(700);
                $(".ulLang2").append("<li class='caps liLang2'><span class='li-span'>-</span>Spanish<span class='cursiveSpan'>-Native</span></li>").fadeIn(700);
                $(".ulLang2").append("<li class='caps liLang2'><span class='li-span'>-</span>Spanish<span class='cursiveSpan'>-Native</span></li>").fadeIn(700);
                $(".ulLang2").append("<li class='caps liLang2'><span class='li-span'>-</span>Spanish<span class='cursiveSpan'>-Native</span></li>").fadeIn(700);
                $(".ulLang2").append("<li class='caps liLang2'><span class='li-span'>-</span>Spanish<span class='cursiveSpan'>-Native</span></li>").fadeIn(700);
                $(".liSkills2").fadeIn(700);
                $(".liSchool2").fadeIn(700);
                $(".liWork2").fadeIn(700);
                $(".liLang2").fadeIn(700);

                editing();
                hoverEff();
            });
        });
    });

//Finish Function
    function finishCV() {
        $("h2").fadeOut(700);
        $(".work").fadeOut(700);
        $(".addWork").fadeOut(700);
        $(".ulWork").fadeOut(700);
        $(".liWork").fadeOut(700);
        $(".h1Title").fadeOut(700);
        $(".bioEx").remove();
        $(".btnDone").fadeOut(0);
        $(this).fadeOut(700, function(){
            $(".starter").remove();
            $(".cv").fadeIn(700, function(){
                $("#name").text(name + " " + lname);
                $("#age").text(age + " Years Old");
                $("#email").text(email);
                $("#phone").text("Phone No. " + phone);
                $("#city").text(zip + ", " + city + ", " + country);
                $(".bioOne").fadeIn(700);
                $(".ulSkills2").fadeIn(700);
                $(".ulSchool2").fadeIn(700);
                $(".ulWork2").fadeIn(700);
                $(".ulLang2").fadeIn(700);
                $(".liLang2").fadeIn(700);
                $(".liSkills2").fadeIn(700);
                $(".liSchool2").fadeIn(700);
                $(".liWork2").fadeIn(700);
                $(".btnPrint").fadeIn(700);
            });
        });
    }

    // Finish After Editing
    function finishCVAfter() {
        $("h2").fadeOut(700);
        $(".work").fadeOut(700);
        $(".addWork").fadeOut(700);
        $(".ulWork").fadeOut(700);
        $(".liWork").fadeOut(700);
        $(".h1Title").fadeOut(700);
        $(".btnDone").fadeOut(700);
        $(".bioEx").remove();
        $(this).fadeOut(700, function(){
            $(".cv").fadeIn(700);
            $("#name").fadeIn(700);
            $("#age").fadeIn(700);
            $("#email").fadeIn(700);
            $("#phone").fadeIn(700);
            $("#city").fadeIn(700);
            $(".bioOne").fadeIn(700);
            $(".ulSkills2").fadeIn(700);
            $(".ulSchool2").fadeIn(700);
            $(".ulWork2").fadeIn(700);
            $(".ulLang2").fadeIn(700);
            $(".liLang2").fadeIn(700);
            $(".liSkills2").fadeIn(700);
            $(".liSchool2").fadeIn(700);
            $(".liWork2").fadeIn(700);
            $(".btnPrint").fadeIn(700);
            $(".btnEnd").fadeIn(700);
            $(".endText").fadeIn(700);
        });
    }

    // Editing Function
    function editing() {
        $("h3#name").on("click", function(){
            editCV(".nameEdit");
            editCV(".lnameEdit");
            $(".btnDone").on("click", function(){
                btnDoneMain("name", ".name", ".lname");
            });
        });

        $("h3#age").on("click", function(){
            editCV(".ageEdit");
            $(".btnDone").on("click", function(){
                if($(".age").val() > 0) {
                    if($(".age").val() > 99) {
                        $(".msgAge").fadeIn(200);
                        $("input.age").addClass("empty");
                    } else {
                        btnDoneMain("age", ".age", "", "", "", " Years Old");
                        $("h2").fadeOut(700);
                    }
                } else {
                    $(".msgAge").fadeIn(200);
                    $("input.age").addClass("empty");
                }
            });
        });

        $("h3#email").on("click", function(){
            editCV(".emailEdit");
            $(".btnDone").on("click", function(){
                btnDoneMain("email", ".email", "", "", "", "");
            });
        });

        $("h3#phone").on("click", function(){
            editCV(".phoneEdit");
            $(".btnDone").on("click", function(){
                btnDoneMain("phone", ".phone", "", "", "Phone No. ", "");
            });
        });

        $("h3#city").on("click", function(){
            editCV(".cityEdit");
            editCV(".zipEdit");
            editCV(".countryEdit");
            $(".btnDone").on("click", function(){
                btnDoneMain("city", ".zip", ".city", ".country");
            });
        });

        $("#bio").on("click", function(){
            editCV(".bioEdit");
            $(".btnDone").on("click", function(){
                btnDoneMain("bio", ".bio", "", "", "", "");
            });
        });

        // -----------------------------------------------

        $(".skillsH4").on("click", function(){
            editCV(".skillsEdit");
            $(".btnDone").on("click", function(){
                btnDoneUl("skills", "Skills", ".skillsEdit");
            });
        });

        $(".schoolH4").on("click", function(){
            editCV(".schoolEdit");
            $(".btnDone").on("click", function(){
                btnDoneUl("school", "School", ".schoolEdit");
            });
        });

        $(".workH4").on("click", function(){
            editCV(".workEdit");
            $(".btnDone").on("click", function(){
                btnDoneUl("work", "Work", ".workEdit");
            });
        });

        $(".langH4").on("click", function(){
            editCV(".langEdit");
            $(".btnDone").on("click", function(){
                btnDone2Ul("lang", "Lang", "langLevel", ".langEdit");
            });
        });
    }

//Edit CV Li's
    function editCV(pageNum) {
        $(".cv").fadeOut(700, function(){
            $(pageNum).fadeIn(700);
            $(".liEdited").fadeIn(700);
            $(".h1Edit").fadeIn(700);
            $(".btnDone").fadeIn(700);
            $(".cv").fadeOut();
        });
    }

    // One Ul
    function btnDoneUl(ulEdit, ulEditCap, pageNum) {
        if($("input." + ulEdit).val()) {
            $(".li" + ulEditCap).fadeIn(700);
            var variab = $("input." + ulEdit).val();
            $("input." + ulEdit).val("").focus();
            $(".ul" + ulEditCap).append("<li class='caps liEdited li" + ulEditCap + "'>" + variab + "</li>");
            $(".ul" + ulEditCap + "2").append("<li class='caps li" + ulEditCap + "2'><span class='li-span'>-</span>" + variab + "</li>");
            $("input." + ulEdit).removeClass("empty");
            $("h2").fadeOut(700);
        }
        $(pageNum).fadeOut(700);
        $(".btnDone").fadeOut(700, function(){
            finishCVAfter();
        });
    }

    // Two Ul
    function btnDone2Ul(ulEdit, ulEditCap, ulEdit2, pageNum) {
        if($("input." + ulEdit).val()) {
            $(".li" + ulEditCap).fadeIn(700);
            var variab = $("input." + ulEdit).val();
            var variab2 = $("input." + ulEdit2).val();
            $("input." + ulEdit).val("").focus();
            $("input." + ulEdit2).val("");
            $(".ul" + ulEditCap).append("<li class='caps liEdited li" + ulEditCap + "'>" + variab + "<span class='cursiveSpan'>-" + variab2 + "</span></li>");
            $(".ul" + ulEditCap + "2").append("<li class='caps li" + ulEditCap + "2'><span class='li-span'>-</span>" + variab + "<span class='cursiveSpan'>-" + variab2 + "</span></li>");
            $("input." + ulEdit).removeClass("empty");
            $("h2").fadeOut(700);
        }
        $(pageNum).fadeOut(700);
        $(".btnDone").fadeOut(700, function(){
            finishCVAfter();
        });
    }

    // Done Main Btn 
    function btnDoneMain(id, pageNum, pageNum2, pageNum3, textPrevInitial, textPrevFinal) {
        if($(pageNum3).val()) {
            var text1 = $(pageNum).val();
            var text2 = $(pageNum2).val();
            var text3 = $(pageNum3).val();
            $("#" + id).text(text1 + ", " + text2 + ", " + text3);
        } else if($(pageNum2).val()) {
            var text1 = $(pageNum).val();
            var text2 = $(pageNum2).val();
            $("#" + id).text(text1 + " " + text2)
        } else if($(pageNum).val()) {
            var text1 = $(pageNum).val();
            $("#" + id).text(textPrevInitial + " " + text1 + " " + textPrevFinal);
        }
        $(pageNum).fadeOut(700);
        $(pageNum2).fadeOut(700);
        $(pageNum3).fadeOut(700);
        $(".btnDone").fadeOut(700, function(){
            finishCVAfter();
        });
    }

// Hover Effect At The End
    function hoverEff() {
        $(".endText").hover(function(){
            $(".hoverEffect").toggleClass("hoverClass");
        });
    }