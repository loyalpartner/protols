import * as ls from 'vscode-languageserver/node'
import * as lstd from 'vscode-languageserver-textdocument'
import * as protobuf from './protobuf'
import { ExecException } from 'child_process'

const connection = ls.createConnection(ls.ProposedFeatures.all)
const documents = new ls.TextDocuments(lstd.TextDocument)

connection.onInitialize(() => {
  return {
    capabilities: {
      definitionProvider: true
    }
  }
})

connection.onDefinition((params) => {
  try{
    const context = protobuf.analyze("", 1, 2)
    const uri = params.textDocument.uri
  } catch (error) {
    console.log(error)
  }
  return [{} as ls.DefinitionLink];
})

documents.listen(connection)
connection.listen()
