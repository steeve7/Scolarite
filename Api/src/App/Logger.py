import time
from typing import Literal
import colorama


class Printer():
    def __init__(self,AppName = __name__):
        colorama.init()
        self.Name = AppName
    
    def print(self,*args,end = "\n",pipe:Literal["stdout","file","str"] = "stdout",**kwargs):
        message = f"{colorama.Fore.BLUE}{self.Name}{colorama.Fore.RESET}{colorama.Fore.LIGHTYELLOW_EX}::{colorama.Fore.RESET}{colorama.Fore.LIGHTCYAN_EX}{time.strftime('%H:%M:%S', time.localtime())}{colorama.Fore.RESET} {" ".join(map(str,args))}{end}"
        pipe = pipe.lower()
        if pipe =="stdout":
            print(
                message,
                end = ""
            )
        elif pipe =="file":
            file = open(kwargs["filename"],kwargs["mode"] if "mode" in kwargs.keys() else "+a")
            file.write(message)
            file.close()

        elif pipe == "str":
            return message
        
    def error(self,*args,end = "\n"):
        self.print(f"{colorama.Fore.LIGHTRED_EX}{' '.join(map(str,args))}{colorama.Fore.RESET}",end = end)
if __name__ == "__main__":
    Printer().print("this is a Test")