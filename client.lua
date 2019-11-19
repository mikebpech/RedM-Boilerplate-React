local display = false

RegisterCommand("chat", function(source)
    SetDisplay(not display)
end)

RegisterNUICallback("main", function(data)
    chat(data.text, {0,255,0})
end)

RegisterNUICallback("toggleChat", function(data)
    SetDisplay(not display)
end)


RegisterNUICallback("error", function(data)
    chat(data.error, {255,0,0})
    SetDisplay(false)
end)

RegisterNUICallback("exit", function(data)
    chat("Exited", {0,255,0})
    SetDisplay(false)
end)

--

Citizen.CreateThread(function()
    while display do
        Citizen.Wait(0)
        DisableControlAction(0, 1, display) --lookleftright
        DisableControlAction(0, 2, display) --lookupdown
        DisableControlAction(0, 142, display) --melee
        DisableControlAction(0, 18, display) --enter
        DisableControlAction(0, 322, display) --esc
        DisableControlAction(0, 106, display) --vehiclemousecontroloverride
    end
end)

function SetDisplay(bool)
    display = bool
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = "chat",
        status = bool,
    })
end

function chat(str, color)
    SendNUIMessage({
        type="chat:addMessage",
        message = str,
    })
end