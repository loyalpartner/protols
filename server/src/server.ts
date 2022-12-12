import * as ls from 'vscode-languageserver/node'
import * as lstd from 'vscode-languageserver-textdocument'
import * as protobuf from './protobuf'
import {channel} from 'diagnostics_channel'

const connection = ls.createConnection(ls.ProposedFeatures.all)
const documents = new ls.TextDocuments(lstd.TextDocument)

connection.onInitialize(() => {
  return {
    capabilities: {
      definitionProvider: true,
    },
  }
})

connection.onDefinition((params) => {
  const context = protobuf.analyze('', 1, 2)
  const uri = params.textDocument.uri
  return [
    {
      targetRange: {
        start: {
          line: 1,
          character: 1,
        },
        end: {
          line: 1,
          character: 2,
        },
      },
    } as ls.DefinitionLink,
  ]
})

documents.listen(connection)
connection.listen()
