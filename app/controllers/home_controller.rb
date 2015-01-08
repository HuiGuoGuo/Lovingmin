#encoding:utf-8
class HomeController < ApplicationController

  def index

  end

  def chun
    @time = Time.now.strftime("%Y年%m月%d日")
  end

  def xia 
  end

  def qiu 
  end

  def dong 
  end

 def to_time(time)
    unless time==nil
      to_time=time.strftime("%Y年%m月%d日 %H:%M:%S")
    end
  end
 
end
