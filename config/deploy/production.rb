server 'unite', user: 'ubuntu', roles: %w{app db web}
set :deploy_to, '/var/www/unite-the-armies.org'
set :ssh_options, { forward_agent: true }
