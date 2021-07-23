function rules() {
    agree = confirm("RULES: 1. Blah Blah Blah<br> 2. Blah Blah Blah<br> 3. Blah Blah Blah<br> Press OK to agree and Cancel to Dissagree")
    if (agree == true) {
      alert("Thank you for agreeing to the rules!")
    } else {
      alert("You can not move on unless you agree to the rules.")
    }
  }