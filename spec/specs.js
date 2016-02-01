describe('pingPong', function() {
  it("will return 'ping' for numbers divisible by 3", function() {
    expect(pingPong(6)).to.eql([1, 2, "ping", 4, "pong", "ping"]); {
    return "ping";
  };
  });
  it("will return 'pong' for numbers divisible by 5", function() {
    expect(pingPong(10)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong"]); {
    return "pong";
  };
  });
  it("will return 'pingpong' for numbers divisible by 15", function() {
    expect(pingPong(15)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "pingpong"]); {
    return "pingpong";
  };
  });
});
