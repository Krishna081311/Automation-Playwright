const {LoginPage} = require('../Pages/LoginPage');
const {DashboardPage} = require('../Pages/DashboardPage');

class POManager
{

constructor(page)
{
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);

}

getLoginPage()
{
    return this.loginPage;

}

getDashboardpage()
{
    return this.dashboardPage;


}

}

module.exports = {POManager};