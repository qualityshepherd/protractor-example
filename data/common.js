// store user data in object for ease of use and readability
export default {

    testUser : {'username': 'code@testing.example', 'password': '4C&XP9KB@y^EAo'},
    baseUrl : 'https://app.thoughttrace.dev/qa/',
    documentUrl : 'https://app.thoughttrace.dev/qa/documents',
    factUrl : 'https://app.thoughttrace.dev/qa/admin/fact-types',
    tagUrl : 'https://app.thoughttrace.dev/qa/admin/tags',
    uploadUrl : 'https://app.thoughttrace.dev/qa/uploads',
    factType: {'name': `first_fact_${Math.random().toString(5)}`, 'description': `${Math.random().toString(5)}_Description`},
    docName: {'name': `fist_document_${Math.random().toString(5)}`, 'description':`${Math.random().toString(5)}_description`, 'thought' : 'Oil and Gas Lease'},
    tagName: {'name': `tag_name_${Math.random().toString(5)}`, 'description': `${Math.random().toString(5)}_Description`},
};