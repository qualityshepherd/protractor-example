export default {

    addDocumentButton : 'div[class*="content-area"] button[class*="btn btn-primary"]  clr-icon[shape="plus-circle"]',
    documentName : 'form[class*="clr-form"] input[name*="docType-name"]',
    documentDescription : 'form[class*="clr-form"]  textarea[name="docType-description"]',
    documentLinkedClassifications : 'form[class*="clr-form"]  input[name="default-classification-search-text"]',
    documentClassificationName : 'div[class="classifications-list"]  span[class*="classification-name"]',
    selectedClassification : 'div[class="classification selected-classification"]',
    thoughtExtraction: 'div[class="clr-control-container"] select[name*="docType-Ontology"] option[class="ng-star-inserted"]',
    documentIcon : "header div .nav-icon clr-icon[shape='tt-logo']",
    listItems : "div[class='clr-control-container'] select[name*='docType-Ontology']",
    documentMenuItem: 'clr-dropdown-menu a[href="/qa/admin/document-types"]',
    tagMenuItem: 'clr-dropdown-menu a[href="/qa/admin/tags"]' , 
    settingsIcon : 'clr-dropdown.no-caret.dropdown.ng-star-inserted > button > clr-icon',
    DocumentModal : '//h3[contains(text(),"New Document Type")]',
    SaveButton : 'div.modal-footer > button.btn.btn-primary',
    documentSearch : 'div > ttc-document-type-management > ttc-search-input > input',
    SearchResultElement : 'div.datagrid-row-scrollable > div > clr-dg-cell.datagrid-cell.ng-star-inserted:nth-child(8) span'
        
};