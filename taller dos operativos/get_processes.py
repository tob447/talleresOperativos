import psutil
def getProcesses():
    listOfProcesses=list()
    for proc in psutil.process_iter():
        pInfoDict= proc.as_dict(attrs=['name','pid','memory_percent','cpu_percent'])
        listOfProcesses.append(pInfoDict)

    return listOfProcesses

def killProcess(pid):
    process=psutil.Process(pid)
    process.kill()
    
killProcess(9730)
