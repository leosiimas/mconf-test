module MessagesHelper

    def formatText(text)        

        uperText = text.upcase

        colors = ['#481E9D', '#8D74C0',  '#CA4B57', '#2B2D42', '#1C77C3', '#81B29A', '#E98039'];

        if uperText.include? "MCONF"
            index = uperText.index("MCONF")
            textEdited = "#{text[0...index]}<strong><font color='#{colors[rand 7]}'>Mconf</font></strong>"
            return "#{textEdited}#{formatText(text[index+5 ... text.length])}".html_safe            
        end      
        
        return text
    end
end
