class AppPage{
    btnDelete='.dnb-button.dnb-button--secondary.dnb-button--has-text.dnb-space__bottom--medium.dnb-help-button.dnb-space__bottom--medium.dnb-modal__trigger.dnb-button--icon-position-left.dnb-button--has-icon.dnb-button--size-large';
    dialog= 'h1.dnb-modal__title.dnb-space__top--zero.dnb-space__bottom--small.dnb-h--large.dnb-dialog__title';
    btndelecnfrm = '.dnb-button.dnb-button--primary.dnb-button--has-text.dnb-button--size-large';
    Apptitle ='h1.dnb-h--xx-large';
    titlechk ='span.dnb-tabs__button__title'
    appid = '.dnb-space.dnb-space__bottom--small.yPOMWXk8pEpifwKPAMP5'
    appid1 ='.dnb-p';
    txtcred ='h3.dnb-space__bottom--medium.dnb-h--medium';
    chktxtcrd ='span.dnb-form-status__text';
    txtLivKeys = 'h4.dnb-h--basis';
    txtTstKeys = 'h4.dnb-space__bottom--zero.dnb-space__top--medium.dnb-h--basis'
    key = 'span.k1MRIxBMWbQmso056xFl.dnb-span';
    cpybtn ='.dnb-button__text.dnb-skeleton--show-font';
    btnnewkey ='.dnb-button.dnb-button--primary.dnb-button--has-text.dnb-help-button.dnb-modal__trigger.dnb-button--icon-position-left.dnb-button--has-icon';
    btnclose ='.dnb-button.dnb-button--tertiary.dnb-button--has-text.dnb-modal__close-button.dnb-button--icon-position-left.dnb-button--has-icon';
    validateAppPage(Myname){
        cy.get(this.Apptitle).contains('Exchange Rates');
        cy.get(this.titlechk).should('be.visible').should('have.text','App info & Credentials');
        //verify APPdetails section
        cy.get(this.appid).eq(0).should('have.length','1');
        cy.get(this.appid).eq(1).should('have.length','1');
        cy.get(this.appid1).eq(1).invoke('text').then((captureappid) =>{
            const id = captureappid;
            cy.log('appid:' ,id);
        cy.url().should('include',id);
        cy.get(this.appid).eq(1).contains(Myname);
        cy.get(this.appid).eq(2).contains('Exchange Rates');
        cy.get(this.appid1).eq(7).should('exist');
        cy.get(this.Apptitle).contains('Exchange Rates');


        // verify Credentials section
        cy.get(this.txtcred).should('have.text',' Credentials')
        cy.get(this.chktxtcrd).should('have.text','API keys should be treated with the same level of confidentiality as passwords, and should not be shared or exposed to unauthorized parties.')
        cy.get(this.txtLivKeys).eq(0).should('have.text','Live keys');
        cy.get(this.txtTstKeys).should('have.text','Test keys');
        // check existence of apikeys
        cy.get(this.key).should('exist').should('have.length','2');
       
        })

        //verify if we are able to add New key
        cy.get(this.btnnewkey).scrollIntoView().click();
        cy.get(this.btnclose).should('be.visible').click();  
        cy.get(this.Apptitle).contains('Exchange Rates');  
        cy.get('.dnb-accordion__header.dnb-accordion__header--plain.dnb-accordion__header--icon-right').scrollIntoView().click();
        cy.get('.dnb-space.dnb-height-animation.dnb-accordion__content.dnb-height-animation--is-visible.dnb-height-animation--is-in-dom.dnb-height-animation--parallax').should('exist').contains('Full access');
    }
        //verify ApI accesses
        
    DeleteApp()
    {
        cy.get(this.btnDelete).should('be.visible').should('have.text','‌Delete app').click();
    }
    VerifiyDeletion()
    {
        cy.get(this.dialog).should('be.visible').should('have.text','Are you sure you want to delete the app?');
        cy.get(this.btndelecnfrm).should('be.visible').should('have.text','‌Delete app').click();

    }

}
export default AppPage;

