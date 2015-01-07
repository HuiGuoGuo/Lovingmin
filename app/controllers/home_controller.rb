class HomeController < ApplicationController

  def index

  end

  def index3
    @time = Time.now.strftime("%Y年%m月%d日")
  end

  def index4
  end
  def index5
  end

 def to_time(time)
    unless time==nil
      to_time=time.strftime("%Y年%m月%d日 %H:%M:%S")
    end
  end
 
end
