module ApplicationHelper

    def login
        nav = ''

        if @current_user.present?
            
            nav+='<li class ="inline-block mr2">' + link_to("Logout #{@current_user.name}", login_path, :method => :delete,) + '</li>'
        else
            nav +='<li class ="inline-block mr2">'+ link_to('Sign up', new_user_path) + '</li>'
            nav +='<li class ="inline-block mr2">'+ link_to('Login', login_path) + '</li>'
        end
        nav
    end    

end
