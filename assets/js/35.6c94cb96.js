(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{387:function(t,s,e){"use strict";e.r(s);var a=e(25),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"shell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shell"}},[t._v("#")]),t._v(" Shell")]),t._v(" "),e("h2",{attrs:{id:"ssh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[t._v("#")]),t._v(" SSH")]),t._v(" "),e("h3",{attrs:{id:"生成并配置密钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成并配置密钥"}},[t._v("#")]),t._v(" 生成并配置密钥")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd ~/.ssh")]),t._v("\nssh-keygen  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## https://www.ssh.com/ssh/keygen/")]),t._v("\nssh-copy-id -i id_rsa.pub user@host\n")])])]),e("h3",{attrs:{id:"配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),e("p",[t._v("全局 "),e("code",[t._v("/etc/ssh/ssh_config")]),e("br"),t._v("\n用户 "),e("code",[t._v("~/.ssh/config")])]),t._v(" "),e("p",[t._v("比如设置首选公钥验证方式")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Host *.ac.uk  ## One or more patterns separated by whitespace\n#   HostName <the real hostname (or IP) to login to>\n    PreferredAuthentications publickey,keyboard-interactive,password,hostbased\n")])])]),e("p",[t._v("More on "),e("a",{attrs:{href:"https://linux.die.net/man/5/ssh_config",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://linux.die.net/man/5/ssh_config"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"传文件-scp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#传文件-scp"}},[t._v("#")]),t._v(" 传文件 "),e("code",[t._v("scp")])]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Copy multiple files from remote to local")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" username@remote.edu:/some/remote/directory/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a,b,c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" ./\n")])])]),e("p",[t._v("Glob patterns can be used (e.g. "),e("code",[t._v("*.{py,json}")]),t._v(" for all Python and JSON files).")]),t._v(" "),e("p",[e("strong",[t._v("NOTE")]),t._v(": Using "),e("code",[t._v("\\{a,b,c\\}")]),t._v(" will transfer the files in a single connection/batch (since they'll be expanded on the remote host), while using "),e("code",[t._v("{a,b,c}")]),t._v(" will open multiple connections, and the overhead is quite noticeable when transferring many files")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Copy multiple files from local to remote")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" foo.txt bar.txt username@remotehost.edu:~\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("foo,bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".txt username@remotehost.edu:~\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" *.txt username@remotehost.edu:~\n")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Copy a folder")]),t._v(" ("),e("code",[t._v("-r")]),t._v(")")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" -r user@your.server.example.com:/path/to/foo /home/user/Desktop/\n")])])]),e("p",[e("strong",[t._v("NOTE")]),t._v(": By not including the trailing "),e("code",[t._v("/")]),t._v(" at the end of "),e("code",[t._v("foo")]),t._v(", you will move the directory itself (including contents), rather than only the contents of the directory.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://stackoverflow.com/a/21691584/8682688",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://stackoverflow.com/a/21691584/8682688"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://stackoverflow.com/a/11304926/8682688",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://stackoverflow.com/a/11304926/8682688"),e("OutboundLink")],1)])])]),t._v(" "),e("p",[e("code",[t._v("user@your.server.example.com:/path/to/foo")]),t._v(" 一般很长，可以考虑在 "),e("code",[t._v(".bashrc")]),t._v(" 中"),e("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E5%8F%98%E9%87%8F"}},[t._v("定义一个变量")])]),t._v(" "),e("h2",{attrs:{id:"ls-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ls-命令"}},[t._v("#")]),t._v(" "),e("code",[t._v("ls")]),t._v(" 命令")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("## ls [OPTION...] [FILE or DIR...]\nls -a  ## including entries starting with `.`\nls -l  ## detailed information\nls | head [-<n>]  ## only show first n entries (default 10)\n\n## `.bashrc` 中其实默认定义了一些 aliases\nalias ll='ls -alF'\nalias la='ls -A'   ## except for `.` and `..`\nalias l='ls -CF'\n")])])]),e("p",[t._v("🚧")]),t._v(" "),e("h2",{attrs:{id:"wget"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wget"}},[t._v("#")]),t._v(" "),e("code",[t._v("wget")])]),t._v(" "),e("h2",{attrs:{id:"nohup-ps-kill"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nohup-ps-kill"}},[t._v("#")]),t._v(" "),e("code",[t._v("nohup")]),t._v(", "),e("code",[t._v("ps")]),t._v(", "),e("code",[t._v("kill")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("nohup your_command_here > output_file 2>&1 </dev/null &\n\njobs\n\nkill %i\n")])])]),e("p",[t._v("https://tecadmin.net/run-command-in-background-on-linux/")]),t._v(" "),e("h2",{attrs:{id:"别名-alias-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#别名-alias-type"}},[t._v("#")]),t._v(" 别名 "),e("code",[t._v("alias")]),t._v(", "),e("code",[t._v("type")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("## Append the following line to `~/.bashrc` (or `~/.bash_aliases`)\nalias name='your command'\n\ntype name\n## -> name is aliased to `your command'\n")])])]),e("h2",{attrs:{id:"command-history"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-history"}},[t._v("#")]),t._v(" Command history")]),t._v(" "),e("p",[e("kbd",[t._v("Ctrl")]),t._v(" + "),e("kbd",[t._v("R")])]),t._v(" "),e("p",[t._v("https://www.digitalocean.com/community/tutorials/how-to-use-bash-history-commands-and-expansions-on-a-linux-vps#searching-through-bash-history")]),t._v(" "),e("h2",{attrs:{id:"使用变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用变量"}},[t._v("#")]),t._v(" 使用变量")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("export rdsdir='username@bluebear.bham.ac.uk:/rds'  ## in `.bashrc` file\n\n## Usage\nscp $rdsdir/path/to/foo .\n")])])]),e("p",[t._v("http://www.compciv.org/topics/bash/variables-and-substitution/")])])}),[],!1,null,null,null);s.default=r.exports}}]);