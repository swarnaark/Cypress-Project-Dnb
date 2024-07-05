class CreatePage{
    txtAppname="input[type='text']";
    txtAppdescrp="textarea[aria-placeholder='What will the app be used for?']"
    chkbox='.dnb-checkbox__input';
    txtchk='h2.dnb-h--large';
    sumtxt1='h1.dnb-heading.dnb-h--x-large.dnb-space__bottom--small.dnb-space__top--zero'
    btncreate='.dnb-button.dnb-button--primary.dnb-button--has-text.dnb-button--size-large'
    complete='h2.dnb-space__bottom--zero.dnb-h--large'
    ApplicationInfo()
    {
         //Fill in the required fields
        cy.get(this.txtAppname).type('Exchange Rates',{delay:500});
        cy.get(this.txtAppdescrp).click().type('This application fetches exchange rates of 50 different currencies');
        cy.contains('Next').click();
        
    }
    SelectAPI()
    {
        //Fill in the required fields
    cy.contains('Select the APIs you want to attach');    
    cy.get(this.chkbox).check();
    cy.contains('Next').click();
       
       
   }
   selectAPIscopes()
   {
    //Fill in the required fields
    cy.get(this.txtchk).should('be.visible').should('have.text','Select API scopes');    
    cy.contains('Next').click();  
}
    //verify Summary page
    VerifySummary()
    {
        cy.get(this.sumtxt1).should('be.visible').should('have.text','Summary');    

    }
    //Create Application
    CreateApplication()
    {
        cy.get(this.btncreate).should('be.visible').click();  
        cy.get(this.complete).should('have.text','Yay!Application created');  

    }
    
        
  
}
export default CreatePage;

