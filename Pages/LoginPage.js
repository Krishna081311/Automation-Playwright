class LoginPage
{
    constructor(page){
    
    this.page = page;
    this.userEmail = page.locator('#userEmail');
    this.userPassword = page.locator('#userPassword');
    this.Loginbtn = page.locator('#login');


}

async goTo(URL)
{

    await this.page.goto(URL);

}

async validLogin(UserName, Password){

    await this.userEmail.fill(UserName);
    await this.userPassword.fill(Password);
    await this.Loginbtn.click();
    await this.page.waitForLoadState('networkidle');

}


}

module.exports = {LoginPage};