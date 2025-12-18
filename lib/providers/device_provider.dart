import 'package:flutter/material.dart';
import '../models/device.dart';

class DeviceProvider extends ChangeNotifier {
  final List<Device> _devices = [
    Device(id: '1', name: 'Washing Machine', icon: Icons.local_laundry_service, type: 'appliance'),
    Device(id: '2', name: 'Living Room Light', icon: Icons.lightbulb_outline, type: 'light', isOn: true),
    Device(id: '3', name: 'Smart TV', icon: Icons.tv, type: 'entertainment'),
    Device(id: '4', name: 'Thermostat', icon: Icons.thermostat, type: 'climate', isOn: true),
  ];

  List<Device> get devices => _devices;

  void toggleDevice(int index) {
    _devices[index].isOn = !_devices[index].isOn;
    notifyListeners();
  }

  void addDevice(Device device) {
    _devices.add(device);
    notifyListeners();
  }
}
