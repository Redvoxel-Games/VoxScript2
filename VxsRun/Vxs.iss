[Setup]
AppId={{7d7fdb3f-f59c-4c30-be4c-f81e3c381ef9}
AppName=VxsRun
AppVersion=0.0.6

DefaultDirName={autopf}\VxsRun
DefaultGroupName=VxsRun

DisableProgramGroupPage=yes
Uninstallable=yes

DirExistsWarning=no

OutputBaseFilename=VxsRun-Setup
Compression=lzma
SolidCompression=yes

PrivilegesRequired=admin

[Files]
Source: "publish\*"; DestDir: "{app}"; Flags: recursesubdirs ignoreversion; Excludes: "*.pdb"

[Registry]
Root: HKCR; Subkey: ".vxs"; ValueType: string; ValueName: ""; ValueData: "VxsRun.vxs"; Flags: uninsdeletevalue

Root: HKCR; Subkey: "VxsRun.vxs"; ValueType: string; ValueName: ""; ValueData: "VxsRun file"; Flags: uninsdeletekey

Root: HKCR; Subkey: "VxsRun.vxs\DefaultIcon"; ValueType: string; ValueName: ""; ValueData: "{app}\VxsRun.exe,0"

Root: HKCR; Subkey: "VxsRun.vxs\shell\open\command"; ValueType: string; ValueName: ""; ValueData: """{app}\VxsRun.exe"" ""%1"""

Root: HKLM; Subkey: "SYSTEM\CurrentControlSet\Control\Session Manager\Environment"; ValueType: expandsz; ValueName: "Path"; ValueData: "{olddata};{app}"; Flags: preservestringtype