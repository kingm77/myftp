export const CRLF = '\r\n'
export const messages = {
        100: 'The requested action is being initiated' + CRLF,
        110: 'Restart marker reply' + CRLF,
        120: 'Service ready in %s minutes' + CRLF,
        125: 'Data connection already open; transfer starting' + CRLF,
        150: '150 File status okay; about to open data connection' + CRLF,
        200: '200 The %s command has been successfully completed' + CRLF,
        202: 'Superfluous command' + CRLF,
        211: 'System status, or system help reply' + CRLF,
        212: 'Directory status' + CRLF,
        213: 'File status' + CRLF,
        214: '214 Help message' + CRLF, // On how to use the server or the meaning of a particular non-standard command. This reply is useful only to the human user.
        215: 'UNIX Type: L8' + CRLF, // NAME system type. Where NAME is an official system name from the list in the Assigned Numbers document.
        220: '220 Service ready for new user' + CRLF,
        221: '221 Service closing control connection, Bye' + CRLF, // Logged out if appropriate.
        225: 'Data connection open; no transfer in progress' + CRLF,
        226: '226 Closing data connection' + CRLF, // Requested file action successful (for example, file transfer or file abort).
        227: 'Entering Passive Mode' + CRLF, // (h1,h2,h3,h4,p1,p2).
        230: '230 User logged in, proceed' + CRLF,
        234: 'Honored' + CRLF,
        250: '250 Requested file action okay, completed' + CRLF,
        257: '257 \'%s\' is the current directory' + CRLF,
        331: '331 Username okay, awaiting password' + CRLF,
        332: 'Need account for login' + CRLF,
        350: 'Requested file action pending further information' + CRLF,
        421: 'Service not available, closing control connection' + CRLF, // This may be a reply to any command if the service knows it must shut down.
        425: '425 Unable to open data connection' + CRLF,
        426: 'Connection closed; transfer aborted' + CRLF,
        450: 'Requested file action not taken' + CRLF, // File unavailable (e.g., file busy).
        451: 'Requested action aborted. Local error in processing' + CRLF,
        452: 'Requested action not taken. Insufficient storage' + CRLF,
        500: '500 Syntax error, command unrecognized' + CRLF, // Can close connection
        501: '501 Syntax error in parameters or arguments' + CRLF,
        502: 'Command not supported' + CRLF,
        503: 'Bad sequence of commands' + CRLF,
        504: 'Command parameter not supported' + CRLF,
        530: '530 Not logged in' + CRLF, // Permission Denied, Can close connection
        532: 'Need account for storing files' + CRLF,
        550: '550 Requested action not taken. File unavailable' + CRLF, // (e.g., file not found, no access).
        551: 'Requested action aborted. Page type unknown' + CRLF,
        552: 'Requested file action aborted. Exceeded storage allocation' + CRLF, // (for current directory or dataset).
        553: 'Requested action not taken. File name not allowed' + CRLF
};
