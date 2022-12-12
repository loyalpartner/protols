import {services, ExtensionContext, LanguageClient, workspace, ServerOptions, TransportKind} from 'coc.nvim'

export async function activate(context: ExtensionContext): Promise<void> {
  const executable = context.asAbsolutePath('node_modules/protols/lib/server.js')

	const config = workspace.getConfiguration('gn');
	const client = new LanguageClient(
		'Protobuf',
		'Protobuf language server',
		{
			run: {
				module: executable,
				transport: TransportKind.ipc,
				options: {
					cwd: workspace.root,
					execArgv: config.execArgv || [],
				},
			},
		} as ServerOptions,
		{
			documentSelector: ['proto'],
			initializationOptions: config,
		}
	);

  context.subscriptions.push(services.registLanguageClient(client))
}
