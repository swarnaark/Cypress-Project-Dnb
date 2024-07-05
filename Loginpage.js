class LoginPage{
    btnLogin="a.dnb-button.dnb-button--tertiary.dnb-button--has-text.dnb-button--icon-position-top.dnb-button--has-icon.dnb-button--icon-size-medium.dnb-button--size-large";
    txtUsername="input[type='text']"
    txtpassword="input[type='password']";
    txtsubmit="button[type='submit']";
    //btnMenu="button[type='button']";
    btnMenu=".dnb-button.dnb-button--tertiary.dnb-button--has-text.dnb-button--icon-position-top.dnb-button--has-icon.dnb-button--icon-size-24.dnb-button--size-large";
    txtCheck=".QlKNhMSB4qgjXTkb5MZQ"
    
    LoginTODnb()
    {
        cy.get(this.btnLogin).click();
//Login to portal and ensure the element is visible and assert the content       
        cy.get(this.txtCheck).should('be.visible').should('have.text','Email address & password pleaseLog in');
        
    }
    fillUsername(username)
    {
        cy.get(this.txtUsername).type(username);
    }
    fillPassword(password)
    {
        cy.get(this.txtpassword).type(password); 
    }
    submission(Myname)
    {
        cy.get(this.txtsubmit).click();
        cy.wait(2000);
        cy.get(this.btnMenu).click();
        cy.contains(Myname)
        
    }
    

  
}
export default LoginPage;

