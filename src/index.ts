import {services, ExtensionContext, LanguageClient, workspace, ServerOptions, TransportKind} from 'coc.nvim';
import * as path from 'path';

export async function activate(context: ExtensionContext): Promise<void> {
	const executable = context.asAbsolutePath(path.join('build', 'server.js'));

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

	context.subscriptions.push(services.registLanguageClient(client));
}
