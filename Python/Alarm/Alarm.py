from tkinter import *
from tkinter import ttk
import time

main=Tk()
frame=ttk.Frame(main,padding=10)
frame.grid()

welcomeLabel=ttk.Label(frame, text="Next alarm in..").grid(column=2,row=0)
alarmLabelText=StringVar()
alarmLabelText.set("Unidentified hours")
alarmLabel=ttk.Label(frame,textvariable=alarmLabelText).grid(column=2,row=1)

btnLeave=ttk.Button(frame, text="Quit", command=main.destroy).grid(column=5,row=4)
btnNewAlarm=ttk.Button(frame, text="Create alarm").grid(column=0, row=4)

main.mainloop()



