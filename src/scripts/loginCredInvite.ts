import 'dotenv/config';
import {Employee, Supervisor} from '../lib/db';
import {sendCredentialInvite} from '../lib/email';
import {getCreateCredentialsInviteFromDB} from '../lib/db/controller';

if (require.main === module) {
  const [, , email] = process.argv;

  if (!email) {
    console.error('❌ Missing required arguments: email');
    process.exit(1);
  }

  (async () => {
    try {
      console.log('🔍 Searching for Database Credentials...');
      const employee = await Employee.findOne({where: {name: 'Alex Mercer'}});
      const supervisor = await Supervisor.findOne({where: {employee_id: employee?.id}});
      const existingInvite = await getCreateCredentialsInviteFromDB({
        supervisor_id: supervisor?.id
      });

      const username = employee?.name ?? '';
      const inviteId = existingInvite?.id ?? '';
      const token = existingInvite?.invite_token ?? '';

      console.log('📧 Sending email...');
      await sendCredentialInvite(email, token, inviteId, username);

      console.log('✅ Email sent successfully to:', email);
    } catch (error) {
      console.error('❌ Error sending email:', error);
    }
  })();
}
