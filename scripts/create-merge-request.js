import { exec } from 'child_process';

const targetBranch = process.argv[2] || 'develop';
exec(
  'git push origin HEAD \
        -o merge_request.create \
        -o merge_request.remove_source_branch \
        -o merge_request.target=' + targetBranch,
  (error, stdout, stderr) => {
    stdout && console.log(`[stdout]\n${stdout}`);
    stderr && console.log(`[stderr]\n${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  },
);
