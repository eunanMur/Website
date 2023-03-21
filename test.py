from firebase import firebase
import serial
import time

flag = ('on')

firebase = firebase.FirebaseApplication('https://website-d9701-default-rtdb.firebaseio.com/', None)

ser = serial.Serial("COM5")

ser.baudrate = 115200

run_once = 0

print(ser)

def onoff():
    result = firebase.get('/Data', 'Condition')
    return result

switch = True
switch2 = True

while True:
    res = onoff()
    data = res+","
        
 
    if res == 'on':
        if run_once == 0 and switch:
            ser.write(data.encode())
            print(data)
            switch2 = True
            switch = False
            time.sleep(1)
    

    if res == 'off':
        if run_once == 0 and switch2:
            ser.write(data.encode())
            print(data)
            switch = True
            switch2 = False
            time.sleep(1)

    