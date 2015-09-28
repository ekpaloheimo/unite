# config valid only for current version of Capistrano
lock '3.4.0'

require "rvm/capistrano"

set :application, 'unite-the-armies'
set :repo_url, 'git@github.com:jonitoyryla/unite-the-armies.git'
set :deploy_to, '/var/www/unite-the-armies'

# Default value for :linked_files is []
# set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')

# Default value for linked_dirs is []
# set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5

set :rvm_ruby_string, :local              # use the same ruby as used locally for deployment
set :rvm_autolibs_flag, "read-only"       # more info: rvm help autolibs

set :default_env, {
  'PATH' => "$PATH:/usr/local/rvm/rubies/ruby-2.2.1/bin:/usr/local/rvm/gems/ruby-2.2.1/bin:/usr/local/rvm/rubies/ruby-2.2.1/lib/ruby/2.2.0"
}

namespace :deploy do

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
      # Here we can do anything such as:
      # within release_path do
      #   execute :rake, 'cache:clear'
      # end
    end
  end

  after :updated, :ensure_user do
    on roles(:all) do
      invoke "deploy:symlink_bundler"
    end
  end

  after "deploy", :ensure_user do
    on roles(:all) do
      invoke "deploy:run_test"      
    end
  end

  desc "Run tests"
  task :run_test do
    on roles :all do
      within release_path do
        execute :rake, :test
      end
    end
  end

  desc "Symlink shared config files"
  task :symlink_bundler do
    on roles :all do
      within release_path do
        execute "rm #{release_path}/vendor/bundle" rescue nil
        execute "ln -s #{deploy_to}/shared/vendor_bundle #{release_path}/vendor/bundle"      
      end
    end
  end

  desc 'foo'
  task :foobar do
    on roles :all do
      execute "/usr/local/rvm/rubies/ruby-2.2.1/bin/ruby -v"
      execute "ruby -v"
    end
  end
end

#before 'deploy:foobar', 'rvm:install_rvm'  # install/update RVM
#before 'deploy:foobar', 'rvm:install_ruby' # install Ruby and create gemset, OR:

