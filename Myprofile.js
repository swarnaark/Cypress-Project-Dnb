class ProfilePage{
    btnProfile="a[href='/profile']";
    LnkCreate="a[href='/application/new?isProviderApp=false']"
    LnkCreate1="a[href='/application/new']"
    btnList='h3.dnb-h--basis';
    btnLogout ='.dnb-button.dnb-button--tertiary.dnb-button--has-text.dnb-button--icon-position-top.dnb-button--has-icon.dnb-button--icon-size-medium.dnb-button--size-large';
    txtcheck='.nvaiUGLC5ECBDqjek9Yz'
    GoToCreate()
    {
        cy.get(this.btnProfile).should('have.attr', 'href', '/profile').click();
//Login to portal and ensure the element is visible and assert the content       
        cy.get(this.LnkCreate1).click();
        
    }

    verifyAppDetails()
    {
        cy.get(this.btnProfile).should('have.attr', 'href', '/profile').click();
        cy.get(this.btnList).should('be.visible', true).contains('Exchange Rates').click();  

    }

    AppDeleted()
    {
        cy.get(this.btnList).should('be.visible', true).contains('Exchange Rates').should('not.exist');    
    }
    LogoutOfApp()
    {
        cy.get(this.btnLogout).should('be.visible').click();

    }
    Apploggedout()
    {
        cy.get(this.txtcheck).contains('Welcome toDNB Developer');

    }
    


  
}
export default ProfilePage;