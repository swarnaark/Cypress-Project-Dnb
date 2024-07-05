class FrontPage{
    btncookie="#consent-accept";
    txtcheck='.nvaiUGLC5ECBDqjek9Yz';
    btncls ='.dnb-button.dnb-button--tertiary.dnb-button--has-text.dnb-space__top--medium.dnb-button--icon-position-top.dnb-button--has-icon.dnb-button--icon-size-24.dnb-button--size-large';
    lnkAppexp='ul.IxPP82Sh8SGEftSv6sVw li';
    btnMenu=".dnb-button.dnb-button--tertiary.dnb-button--has-text.dnb-button--icon-position-top.dnb-button--has-icon.dnb-button--icon-size-24.dnb-button--size-large";
    lnkAppexp1 ='ul.dnb-ul.dnb-unstyled-list li';
    CookieUsage()
    {
        cy.get(this.btncookie).click();
//Login to portal and ensure the element is visible and assert the content       
        cy.get(this.txtcheck).contains('Welcome toDNB Developer');
        
    }

    NavigateToAppExplorer(){
        cy.get(this.btncls).click();
        cy.get(this.lnkAppexp).eq(0).find('a').then($anchor =>{
            const href = $anchor.attr('href');
            cy.log(href);
            cy.wrap($anchor).click();
        })

    }
    NavigateToAppExplorerUsingMenu(){
        cy.get(this.btnMenu).click();
        cy.get(this.lnkAppexp1).eq(1).find('a').then($anchor =>{
            const href = $anchor.attr('href');
            cy.log(href);
            cy.wrap($anchor).click();
        })
    

    }
  
}
export default FrontPage;