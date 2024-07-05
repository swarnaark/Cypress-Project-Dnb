class AppExplorerPage{
    txttitle ='h1.dnb-h--xx-large';
    btnApi = '.dnb-button.dnb-button--secondary.dnb-button--has-text.dnb-toggle-button__button';
    btnFilter = '';
    checkAppexp()
    {
        cy.get(this.txttitle).should('have.text', 'Discover APIsAPI Explorer');
    }
    CheckListOfApi(){
        cy.get(this.btnApi).should('be.visible').should('have.length', 3);
        cy.get(this.btnApi).eq(0).should('be.visible').should('have.text', '‌All');
        cy.get(this.btnApi).eq(1).should('be.visible').should('have.text', '‌Corporate APIs');
        cy.get(this.btnApi).eq(2).should('be.visible').should('have.text', '‌Regulatory APIs');

    }

}
export default AppExplorerPage;