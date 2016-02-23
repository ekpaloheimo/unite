server '188.117.25.189', user: 'ubuntu', roles: %w{app db web}
set :deploy_to, '/var/www/testi.unite-the-armies.org'
set :ssh_options, {  
  keys: %w(/home/jto/.ssh/unite-the-armies.pem /home/jto/.ssh/id_rsa_ekpaloheimo_git)
}
